import React, { useEffect } from 'react';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/assets/styles/theme';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);
  },[]);

  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading size={56} />}
    </ThemeProvider>
  );
}