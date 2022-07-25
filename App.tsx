import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './src/components/loading';
import Routes from './src/routes';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register';
import { SignIn } from './src/screens/SignIn';
import { THEME } from './src/styles/theme';
export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      {fontsLoaded ? <Routes/> : <Loading/>}
      
    </NativeBaseProvider>
  );
}
