import React from 'react';
import {Text, View} from 'react-native';
import StoriesContainer from '../../components/StoriesContainer';
import Post from '../../components/Post';

const HomeScreen = () => (
  <View>
    <StoriesContainer />
    <Post />
  </View>
);

export default HomeScreen;
