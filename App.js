/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoverScreen from './src/screens/DiscoverScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ReelsScreen from './src/screens/NotificationsScreen/ReelsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import DiscoverIcon from 'react-native-vector-icons/Ionicons';
import ReelsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
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
                <DiscoverIcon
                  name="search-outline"
                  size={size}
                  color="#ffffff"
                />
              );
            }

            if (route.name === 'Reels') {
              return focused ? (
                <ReelsIcon
                  name="play-box-multiple"
                  size={size}
                  color="#ffffff"
                />
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
                <NotificationsIcon
                  name="heart-multiple"
                  size={size}
                  color="#ffffff"
                />
              ) : (
                <NotificationsIcon
                  name="heart-multiple-outline"
                  size={size}
                  color="#ffffff"
                />
              );
            }

            if (route.name === 'Profile') {
              return focused ? (
                <ProfileIcon name="person-sharp" size={size} color="#ffffff" />
              ) : (
                <ProfileIcon
                  name="person-outline"
                  size={size}
                  color="#ffffff"
                />
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
