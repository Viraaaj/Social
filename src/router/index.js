import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import bottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryPreviewScreen from '../screens/StoryPreviewScreen';

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Home'}
      component={bottomHomeNavigator}
      options={{headerShown: false}}
    />

    {/* story screen */}
    <RootStack.Screen
      name="Story"
      component={StoryPreviewScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default Router;
