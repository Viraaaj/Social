import React from 'react';
import {Text, View} from 'react-native';

const Footer = ({caption, likesCount, createdAt}) => (
  <View
    style={{width: '95%', marginTop: 4, marginBottom: 4, alignSelf: 'center'}}>
    <Text style={{marginTop:2, color: '#ffffff', fontWeight: 'bold', marginBottom: 3}}>
      {' '}
      {likesCount} likes{' '}
    </Text>
    <Text style={{color: '#ffffff', marginBottom: 3}}> {caption} </Text>
    <Text style={{color: '#b3b3b3', marginBottom: 3}}> {createdAt} </Text>
  </View>
);

export default Footer;
