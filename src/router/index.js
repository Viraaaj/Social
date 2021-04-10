import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import DiscoverIcon from 'react-native-vector-icons/Ionicons';
import ReelsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationsIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import NotificationsScreen from '../screens/NotificationsScreen';
import ReelsScreen from '../screens/NotificationsScreen/ReelsScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import HomeStackScreen from './home.routes';
import ProfileStackScreen from './profile.routes';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return focused ? (
              <HomeIcon name="home-sharp" size={size} color="#ffffff" />
            ) : (
              <HomeIcon name="home-outline" size={size} color="#ffffff" />
            );
          }

          if (route.name === 'Discover') {
            return focused ? (
              <DiscoverIcon name="search" size={size} color="#ffffff" />
            ) : (
              <DiscoverIcon name="search-outline" size={size} color="#ffffff" />
            );
          }

          if (route.name === 'Reels') {
            return focused ? (
              <ReelsIcon name="play-box-multiple" size={size} color="#ffffff" />
            ) : (
              <ReelsIcon
                name="play-box-multiple-outline"
                size={size}
                color="#ffffff"
              />
            );
          }

          if (route.name === 'Notifications') {
            return focused ? (
              <NotificationsIcon name="heart" size={size} color="#ffffff" />
            ) : (
              <NotificationsIcon name="hearto" size={size} color="#ffffff" />
            );
          }

          if (route.name === 'Profile') {
            return focused ? (
              <ProfileIcon name="person-sharp" size={size} color="#ffffff" />
            ) : (
              <ProfileIcon name="person-outline" size={size} color="#ffffff" />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          backgroundColor: '#121212',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default Router;
