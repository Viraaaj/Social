import React from 'react';
import {View} from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Image';

const Post = ({post}) => (
  <View style={{backgroundColor: '#121212'}}>
    <Header imageUri={post.user.imageUri} name={post.user.name} />
    <Body imageUri={post.imageUri} />
    <Footer
      caption={post.caption}
      likesCount={post.likesCount}
      createdAt={post.createdAt}
    />
  </View>
);

export default Post;
