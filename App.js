import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginpage from './Screens/Loginpage';
import Registrationpage from './Screens/Registrationpage';
import Homepage from './Screens/Homepage';
import Recoverypage from './Screens/Recoverypage';
import LandingPage from './Screens/Landingpage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LandingPage} name="Landing" options={{ headerShown: false }} />
        <Stack.Screen component={Loginpage} name="Login" options={{ headerShown: false }} />
        <Stack.Screen component={Homepage} name="Home" options={{ headerShown: false }} />
        <Stack.Screen component={Registrationpage} name="Register" options={{ headerShown: false }} />
        <Stack.Screen component={Recoverypage} name="Recovery" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
