import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileRoutes = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
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
                My Profile
              </Text>
            </View>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
