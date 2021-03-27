import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';

const Header = ({imageUri, name}) => (
  <View
    style={{
      flexDirection: 'row',
      width: '98%',
      alignSelf: 'center',
      marginTop: 4,
      marginBottom: 4,
    }}>
    <ProfilePicture uri={imageUri} size={40} />
    <Text style={{alignSelf: 'center', color: '#ffffff'}}> {name} </Text>
  </View>
);

export default Header;
