import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AssetsModule, AuthModule } from './src/modules';
import { ThemeProvider } from './src/modules/theme/provider';
import { Routes } from './src/modules/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { OnboardingModule } from './src/modules/onboarding';
import { StatusBar } from 'react-native';
import { Box } from './src/modules/theme';

const AuthenticationStack = createStackNavigator<Routes>();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingModule.Screen.Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={OnboardingModule.Screen.Welcome} />
      <AuthenticationStack.Screen name="Login" component={AuthModule.Screen.Login} />
    </AuthenticationStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AssetsModule.LoadAssets>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" />
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </AssetsModule.LoadAssets>
    </ThemeProvider>
  );
}
