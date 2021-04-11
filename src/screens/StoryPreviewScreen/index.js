import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, Text, View} from 'react-native';
import storiesData from '../../allAppData/StoriesData';

const StoryPreviewScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activerStoryIndex, setActiverStoryIndex] = useState(null);
  const [activerStory, setActiverStory] = useState(null);

  const route = useRoute();
  console.log('route: ', route);

  useEffect(() => {
    const userId = route.params.userId;
    const userStories = storiesData.find(
      storyObject => storyObject.user.id === userId,
    );
    setUserStories(userStories);
    setActiverStoryIndex(0);
    console.log('user specific story: ', userStories);
  }, []);

  useEffect(() => {
    if (userStories && userStories.stories.length > activerStoryIndex - 1) {
      setActiverStory(userStories.stories[activerStoryIndex]);
    }
  }, [activerStoryIndex]);

  const navigation = useNavigation();

  console.log(activerStory);
  if (activerStory) {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
          source={{uri: activerStory.imageUri}}
        />
      </View>
    );
  } else {
    return <ActivityIndicator color="blue" size="large" style={{flex: 1}} />;
  }
};

export default StoryPreviewScreen;
