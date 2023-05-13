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
import UserHelp from './ProfileScreens/UserHelp';
import UserAbout from './ProfileScreens/UserAbout';
import UserConfig from './ProfileScreens/UserConfig';
import AddressAdd from './ProfileScreens/UserAddress/Add';
import AddressEdit from './ProfileScreens/UserAddress/Edit';
import Notifications from './Home/Notifications';
import Reminders from './Home/Reminders';
import TipsAll from './Home/TipsAll';
import TipsFisi from './Home/TipsFisi';
import TipsNutri from './Home/TipsNutri';
import UserEditProfile from './ProfileScreens/UserProfile/edit';
import UserEditAccount from './ProfileScreens/UserAccount/edit';
import TipScreen from './Home/TipScreen';

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

          <Stack.Screen name="Notifications" component={Notifications}/>
          <Stack.Screen name="Reminders" component={Reminders}/>
          <Stack.Screen name="TipsAll" component={TipsAll}/>
          <Stack.Screen name="TipsFisi" component={TipsFisi}/>
          <Stack.Screen name="TipsNutri" component={TipsNutri}/>
          <Stack.Screen name="TipScreen" component={TipScreen}/>

          {/* Profile */}

          <Stack.Screen name="UserProfile" component={UserProfile}/>
            <Stack.Screen name="UserEditProfile" component={UserEditProfile}/>
          <Stack.Screen name="UserAccount" component={UserAccount}/>
            <Stack.Screen name="UserEditAccount" component={UserEditAccount}/>
          <Stack.Screen name="UserAddress" component={UserAddress}/>
            <Stack.Screen name="AddressAdd" component={AddressAdd}/>
            <Stack.Screen name="AddressEdit" component={AddressEdit}/>
          <Stack.Screen name="UserPEP" component={UserPEP}/>

          <Stack.Screen name="UserConfig" component={UserConfig}/>
          <Stack.Screen name="UserHelp" component={UserHelp}/>
          <Stack.Screen name="UserAbout" component={UserAbout}/>

        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default Routes;