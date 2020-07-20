import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AssetsModule, AuthModule } from './src/modules';

const AuthenticationStack = createStackNavigator();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={AuthModule.Screen.Onboarding} />
    </AuthenticationStack.Navigator>
  );
}

export default function App() {
  return (
    <AssetsModule.LoadAssets>
      <AuthenticationNavigator />
    </AssetsModule.LoadAssets>
  );
}
