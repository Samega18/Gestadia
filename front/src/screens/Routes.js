import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PreloadScreen from './Initial/Preload';
import LoginScreen from './Initial/Login';
import RegisterScreen from './Initial/Register';
import ForgotScreen from './Initial/Forgot';
import Forgot2Screen from './Initial/Forgot2';
import BarNavigate from './BarNavigate';
import UserProfile from './ProfileScreens/UserProfile';
import UserAccount from './ProfileScreens/UserAccount';
import UserAddress from './ProfileScreens/UserAddress';
import UserPEP from './ProfileScreens/UserPEP';

//import BarNavigate from './BarNavigate';

// Home


const Stack = createNativeStackNavigator();

function Routes(){
  return (
   
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false}} initialRouteName='Preload'>
          <Stack.Screen name="Preload" component={PreloadScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Forgot" component={ForgotScreen}/>
          <Stack.Screen name="Forgot2" component={Forgot2Screen}/>

          <Stack.Screen name="BarNavigate" component={BarNavigate}/>

          {/* <Stack.Screen name="BarNavigate" component={BarNavigate}/> */}

          {/* Home */}

          {/* Profile */}

          <Stack.Screen name="UserProfile" component={UserProfile}/>
          <Stack.Screen name="UserAccount" component={UserAccount}/>
          <Stack.Screen name="UserAddress" component={UserAddress}/>
          <Stack.Screen name="UserPEP" component={UserPEP}/>

        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default Routes;