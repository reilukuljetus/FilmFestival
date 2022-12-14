/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Carousel, {TCarouselProps} from 'react-native-reanimated-carousel';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {getDimensions} from 'src/config/screenSize';
import View from '../View';
import globalStyles from 'src/config/globalStyles';
import {useLayout} from 'src/Context/AppContext';
import {useState} from 'react';

const colors = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];

function Paralax({
  data,
  height,
  onIndexChange = () => {},
  renderItem,
  pagingEnabled,
  ...rest
}: TCarouselProps) {
  const {fullWidth} = useLayout();
  const [width, setWidth] = useState(fullWidth);
  const progressValue = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width,
  } as const;

  return (
    <View
      onLayout={e => {
        setWidth(e.nativeEvent.layout.width);
      }}
      style={{
        alignItems: 'center',
        marginVertical: 30,
      }}>
      <Carousel
        style={{
          justifyContent: 'center',
          width,
        }}
        loop
        height={height}
        pagingEnabled={pagingEnabled}
        autoPlayInterval={1500}
        windowSize={5}
        onProgressChange={(_, absoluteProgress) => {
          onIndexChange(Math.floor(absoluteProgress));
          progressValue.value = absoluteProgress;
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={data}
        renderItem={({item, animationValue, index: i}) =>
          renderItem({item, animationValue, index: i, progressValue})
        }
        {...rest}
      />
      {pagingEnabled && !!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: 100,
            alignSelf: 'center',
          }}>
          {data.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={globalStyles.Theme.SecondaryColor}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={false}
                length={data.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;

  const width = getDimensions({Tablet: 40, Handset: 10});

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width,
        marginHorizontal: 7,
        height: getDimensions({Tablet: 4, Handset: 10}),
        marginTop: 40,
        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default Paralax;
