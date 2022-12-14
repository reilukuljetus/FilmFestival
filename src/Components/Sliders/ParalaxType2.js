import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import {useLayout} from 'src/Context/AppContext';
import {responsiveSize} from 'src/Helper/Responsive';
import Paralax from '../Carousel/Paralax';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
const CustomItem = ({item, animationValue, length, index, progressValue}) => {
  const style = useAnimatedStyle(() => {
    let inputRange = [index - 2, index - 1, index, index + 1, index + 2];
    let outputRange = [-WIDTH, 0, WIDTH];

    if (index === 0 && progressValue?.value > length - 1) {
      inputRange = [length - 2, length - 1, length, length + 1, length + 2];
      outputRange = [-WIDTH * 1.5, 0, WIDTH * 1.5];
    }
    return {
      alignSelf: 'center',
      width: WIDTH,
      height: HEIGHT,
      borderRadius: 5,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: globalStyles.Theme.SecondaryColor,
      justifyContent: 'flex-end',
      zIndex:
        progressValue.value > index - index / 2 &&
        progressValue.value < index + index / 2
          ? 1000
          : -1000,
      transform: [
        // {
        //   translateX: interpolate(progressValue.value, inputRange, outputRange),
        // },
        {
          scale: interpolate(
            progressValue.value,
            inputRange,
            [0.5, 0.8, 1, 0.8, 0.5],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [progressValue, index, length]);
  return (
    <Animated.View style={style}>
      <Image
        source={item.image}
        resizeMode="cover"
        style={{position: 'absolute'}}
        dim={5}
      />
      <View style={{padding: 8}}>
        <Text color="white">{item.name}</Text>
        <Text color="white" bold>
          {item.qoute}
        </Text>
      </View>
    </Animated.View>
  );
};

const WIDTH = responsiveSize({Tablet: 326, Handset: 280}) * widthRef;
const HEIGHT = responsiveSize({Tablet: 229, Handset: 200}) * heightRef;
const ParalaxType2 = ({data, onIndexChange, pagingEnabled}) => {
  const {fullWidth} = useLayout();
  return (
    <Paralax
      data={data}
      onIndexChange={onIndexChange}
      height={HEIGHT}
      width={WIDTH}
      mode="parallax"
      pagingEnabled={pagingEnabled}
      customAnimation={value => {
        'worklet';

        return {
          zIndex: interpolate(value, [-1, 0, 1], [-1000, 1000, -1000]),
          transform: [
            {
              translateX: interpolate(
                value,
                [-1, 0, 1],
                [-WIDTH / 1.5, 0, WIDTH / 1.5],
              ),
            },
          ],
        };
      }}
      renderItem={({item, animationValue, index, progressValue}) => (
        <CustomItem
          {...{
            item,
            animationValue,
            index,
            progressValue,
            length: data.length,
          }}
        />
      )}
    />
  );
};

export default ParalaxType2;
