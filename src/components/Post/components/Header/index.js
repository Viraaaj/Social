import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
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

    <Icon
      name="dots-three-vertical"
      size={16}
      color="#c0c0c0"
      style={{position: 'absolute', alignSelf: 'center', right: 5}}
    />
  </View>
);

export default Header;
