import React from 'react';
import {Dimensions, View} from 'react-native';
import {Image} from 'react-native';

const Body = ({imageUri}) => (
  <View>
    <Image
      resizeMode="cover"
      source={{uri: imageUri}}
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        alignSelf: 'center',
      }}
    />
  </View>
);
export default Body;
