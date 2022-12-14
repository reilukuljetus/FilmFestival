import React from 'react';
import {StyleSheet} from 'react-native';
import Asset from 'src/Asset';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef} from 'src/config/screenSize';
import FlatList from '../FlatList';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
const CustomItem = ({item, length, index}) => {
  return (
    <View>
      <View style={styles.renderItem}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{position: 'absolute'}}
          dim={item.dim ?? 5}
        />
        <View style={{padding: 8}}>
          <Text color="white" bold>
            {item.qoute}
          </Text>
        </View>
      </View>
      <Text paddingVertical={5} color="white">
        {'  '} {item.name}
      </Text>
    </View>
  );
};

const WIDTH = 126 * widthRef;
const HEIGHT = 188 * heightRef;
const PlaneFlatlist = ({data, ...rest}) => {
  return (
    <FlatList
      data={data}
      style={{width: '90%'}}
      horizontal
      renderItem={({item, index}) => (
        <CustomItem
          {...{
            item,
            index,
            length: data.length,
          }}
        />
      )}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  renderItem: {
    alignSelf: 'center',
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: globalStyles.Theme.SecondaryColor,
    justifyContent: 'flex-end',
    marginHorizontal: 5 * widthRef,
  },
});

export default PlaneFlatlist;
