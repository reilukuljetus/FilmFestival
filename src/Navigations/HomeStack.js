import React from 'react';
import Home from 'src/Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import VideoPlayer from 'src/Screens/VideoPlayer';
import EmailVerification from 'src/Screens/Auth/EmailVerification';
import TermsNConditions from 'src/Screens/TermsNConditions';
import PrivacyPolicy from 'src/Screens/PrivacyPolicy';
import QandA from 'src/Screens/QandA';
import ContactUs from 'src/Screens/ContactUs';
import Payment from 'src/Screens/Auth/Payment';
import PaymentSummary from 'src/Screens/Auth/Payment/Summary';
import Biography from 'src/Screens/Biography';
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
        name="Biography"
        component={Biography}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsNConditions"
        component={TermsNConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QandA"
        component={QandA}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentSummary"
        component={PaymentSummary}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
