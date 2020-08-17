import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AssetsModule, AuthModule } from './src/modules';
import { ThemeProvider } from './src/modules/theme/provider';
import { Routes } from './src/modules/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AuthenticationStack = createStackNavigator<Routes>();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={AuthModule.Screen.Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={AuthModule.Screen.Welcome} />
      <AuthenticationStack.Screen name="Login" component={AuthModule.Screen.Login} />
    </AuthenticationStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AssetsModule.LoadAssets>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </AssetsModule.LoadAssets>
    </ThemeProvider>
  );
}
