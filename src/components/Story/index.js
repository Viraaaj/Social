import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({imageUri, name}) => (
  <View style={styles.mainView}>
    <ProfilePicture uri={imageUri} />
    <Text style={styles.storyText}>{name}</Text>
  </View>
);

export default Story;
