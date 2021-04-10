import React, {useEffect, useState} from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import SendIcon from 'react-native-vector-icons/Feather';
import BookmarkIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({caption, likesCount: likesCountNumber, createdAt}) => {
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const likePressHandler = () => {
    setLike(!like);

    const likeAmount = like ? -1 : 1;
    setLikesCount(likesCount + likeAmount);
  };

  useEffect(() => {
    setLikesCount(likesCountNumber);
  }, []);

  return (
    <View
      style={{
        width: '95%',
        marginTop: 4,
        marginBottom: 4,
        alignSelf: 'center',
      }}>
      <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 10}}>
        <TouchableNativeFeedback onPress={likePressHandler}>
          {like ? (
            <HeartIcon
              name="heart"
              size={27}
              color="red"
              style={{alignSelf: 'center', marginLeft: 3}}
            />
          ) : (
            <HeartIcon
              name="hearto"
              size={27}
              color="#ffffff"
              style={{alignSelf: 'center', marginLeft: 3}}
            />
          )}
        </TouchableNativeFeedback>

        <CommentIcon
          name="comment-o"
          size={25}
          color="#ffffff"
          style={{alignSelf: 'center', marginLeft: 15, marginTop: -4}}
        />
        <SendIcon
          name="send"
          size={25}
          color="#ffffff"
          style={{alignSelf: 'center', marginLeft: 15}}
        />
        <BookmarkIcon
          name="bookmark-o"
          size={25}
          color="#ffffff"
          style={{alignSelf: 'center', position: 'absolute', right: 0}}
        />
      </View>

      <Text
        style={{
          marginLeft: 3,
          color: '#ffffff',
          fontWeight: 'bold',
          marginBottom: 3,
        }}>
        {likesCount} {'likes'}
      </Text>
      <Text style={{color: '#ffffff', marginBottom: 3}}> {caption} </Text>
      <Text style={{color: '#b3b3b3', marginBottom: 3}}> {createdAt} </Text>
    </View>
  );
};

export default Footer;
