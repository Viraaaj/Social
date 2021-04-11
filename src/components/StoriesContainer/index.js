import React from 'react';
import {FlatList, View} from 'react-native';
import Story from '../Story';
import storiesData from '../../allAppData/StoriesData';

const StoriesContainer = () => (
  <View>
    <FlatList
      data={storiesData}
      keyExtractor={({id}) => id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story storyObject={item} />}
    />
  </View>
);

export default StoriesContainer;
