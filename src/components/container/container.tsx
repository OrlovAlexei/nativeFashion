import { Dimensions, Image, StyleSheet, Platform } from 'react-native';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Box, theme } from '../../modules/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface IPropsContainer {
  footer: ReactNode;
}

export const assets = [require('../../../assets/patterns/1.png')];

export function Container(props: PropsWithChildren<IPropsContainer>) {
  const { children, footer } = props;
  const { bottom } = useSafeAreaInsets();
  return (
    <Box backgroundColor="secondary" minHeight={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)}>
      <Box backgroundColor="white">
        <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
          <Image source={assets[0]} style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image source={assets[0]} style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }} />
        <Box borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white" flex={1}>
          {children}
        </Box>
      </Box>

      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
      </Box>
      <Box backgroundColor="secondary" height={bottom} />
    </Box>
  );
}
