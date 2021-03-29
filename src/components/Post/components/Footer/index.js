import React, {useEffect, useState} from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <Icon
              name="heart-multiple"
              size={27}
              color="red"
              style={{alignSelf: 'center', marginLeft: 3}}
            />
          ) : (
            <Icon
              name="heart-multiple-outline"
              size={27}
              color="#ffffff"
              style={{alignSelf: 'center', marginLeft: 3}}
            />
          )}
        </TouchableNativeFeedback>

        <Icon
          name="comment-multiple-outline"
          size={25}
          color="#ffffff"
          style={{alignSelf: 'center', marginLeft: 18}}
        />
        <Icon
          name="share-all-outline"
          size={25}
          color="#ffffff"
          style={{alignSelf: 'center', marginLeft: 18}}
        />
        <Icon
          name="bookmark-multiple-outline"
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
