import React from 'react';
import Home from 'src/Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
