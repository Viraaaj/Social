import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderLeftIcon from 'react-native-vector-icons/Ionicons';
import HeaderRightIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import {Text, View} from 'react-native';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#121212',
            height: 50,
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerTitle: () => (
            <View style={{justifyContent: 'center', alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Dogegram
              </Text>
            </View>
          ),
          headerLeft: () => (
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginLeft: 16,
              }}>
              <HeaderLeftIcon
                name="ios-camera-reverse-outline"
                size={27}
                color={'#fff'}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginRight: 16,
              }}>
              <HeaderRightIcon
                name="facebook-messenger"
                size={25}
                color={'#fff'}
              />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
