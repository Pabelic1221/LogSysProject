import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Loginpage from './Screens/Loginpage';
import Registrationpage from './Screens/Registrationpage';
import Homepage from './Screens/Homepage';
import Recoverypage from './Screens/Recoverypage';
import LandingPage from './Screens/Landingpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LandingPage} name="Landing" options={{headerShown:false}}/>
        <Stack.Screen component={Loginpage} name="Login" options={{headerShown:false}}/>
        <Stack.Screen component={Homepage} name="Home" options={{headerShown:false}}/>
        <Stack.Screen component={Registrationpage} name="Register" options={{headerShown:false}}/>
        <Stack.Screen component={Recoverypage} name="Recovery" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App(){
  return(
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}
