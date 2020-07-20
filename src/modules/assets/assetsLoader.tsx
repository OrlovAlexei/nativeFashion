import React, { useCallback, useEffect, useState, ReactNode } from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useLoadAssets, FontSource } from './hooks';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

interface LoadAssetsProps {
  fonts?: FontSource;
  assets?: number[];
  children: ReactNode;
}

export function AssetsLoader(props: LoadAssetsProps) {
  const { assets, fonts, children } = props;

  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const { ready } = useLoadAssets(assets, fonts);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE_KEY);
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = useCallback((state) => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)), []);

  if (!ready || !isNavigationReady) {
    return <AppLoading />;
  }
  return <NavigationContainer {...{ onStateChange, initialState }}>{children}</NavigationContainer>;
}
