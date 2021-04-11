import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import storiesData from '../../allAppData/StoriesData';
import ProfilePicture from '../../components/ProfilePicture';
import CrossIcon from 'react-native-vector-icons/Entypo';
import SendIcon from 'react-native-vector-icons/Feather';

const StoryPreviewScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  console.log('userStories', userStories);

  const route = useRoute();
  console.log('route: ', route);

  const userId = route.params.userId;
  console.log('userID', userId);

  const navigation = useNavigation();

  useEffect(() => {
    const userStories = storiesData.find(
      storyObject => storyObject.user.id === userId,
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
    console.log('user specific story: ', userStories);
  }, []);

  const navigateToNextUserStory = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPreviousUserStory = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const handleNextStoryPress = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUserStory();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStoryPress = () => {
    if (activeStoryIndex <= 0) {
      navigateToPreviousUserStory();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handleStoryPress = event => {
    // check console for understanding this logic
    // console.log('pressed event: ', event.nativeEvent);
    // const x = event.nativeEvent.locationX;
    // const screenWidth = Dimensions.get('window').width;
    // let isPressedRight = true;
    // if (x < screenWidth / 2) {
    //   isPressedRight = false;
    // }
    // console.log('Pressed right side: ', isPressedRight);

    // main logic
    const x = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if (x < screenWidth / 2) {
      handlePreviousStoryPress();
    } else {
      handleNextStoryPress();
    }
  };

  if (!userStories) {
    return (
      <View>
        <Text>loading.....</Text>
      </View>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];
  console.log('activeStory', activeStory);
  return (
    <TouchableOpacity activeOpacity={1} onPress={handleStoryPress}>
      <ImageBackground
        style={{
          height: '100%',
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
        source={{uri: activeStory.imageUri}}>
        <CrossIcon
          onPress={() => navigation.navigate('Home')}
          name="cross"
          size={30}
          style={{position: 'absolute', top: 13, right: 5}}
        />

        {/* user info */}
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            top: 5,
            left: 5,
            justifyContent: 'center',
          }}>
          <ProfilePicture uri={userStories.user.imageUri} size={35} />
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: '#rgb(255,255,255)',
              fontWeight: '600',
            }}>
            {userStories.user.name}
          </Text>

          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: '#rgb(255,255,255)',
              fontWeight: '600',
              marginLeft: 20,
            }}>
            {activeStory.postedAt}
          </Text>
        </View>

        {/* send message */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <TextInput
            style={{
              width: '85%',
              justifyContent: 'center',
              color: 'rgb(255,255,255)',
              borderRadius: 20,
              height: 50,
              borderWidth: 0.5,
              borderColor: 'rgb(2255,255,255)',
              zIndex: 100,
              paddingLeft: 16,
            }}
            placeholder="Send message"
            placeholderTextColor="rgb(255,255,255)"
            editable={false}
          />

          <SendIcon
            style={{alignSelf: 'center'}}
            color="#ffffff"
            name="send"
            size={25}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default StoryPreviewScreen;
