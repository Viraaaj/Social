import React from 'react';
import {Text, View} from 'react-native';

function DiscoverScreen() {
  return (
    <View
      style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          color: '#ffffff',
          alignSelf: 'center',
          fontSize: 20,
        }}>
        Discover Section
      </Text>
    </View>
  );
}

export default DiscoverScreen;
