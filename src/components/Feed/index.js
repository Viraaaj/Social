import React from 'react';
import {FlatList, View} from 'react-native';
import Post from '../Post';
import StoriesContainer from '../StoriesContainer';

const data = [
  {
    id: 0,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },

  {
    id: 1,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },

  {
    id: 2,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },

  {
    id: 3,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },

  {
    id: 4,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },

  {
    id: 5,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },

  {
    id: 6,
    user: {
      imageUri:
        'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
      name: 'Image4',
    },
    imageUri:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    caption: 'Footer info',
    likesCount: 5000,
    createdAt: '10 mins ago',
  },
];

const Feed = () => (
  <View>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={StoriesContainer}
    />
  </View>
);

export default Feed;
