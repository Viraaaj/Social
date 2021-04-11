import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = props => {
  //destructuring story data created
  const {
    storyObject: {
      user: {id, imageUri, name},
    },
  } = props;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Story', {userId: id})}
      activeOpacity={1}
      style={styles.mainView}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.storyText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
