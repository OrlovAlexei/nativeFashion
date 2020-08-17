import { Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, theme } from '../../modules/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface IPropsContainer {
  children: ReactNode;
  footer: ReactNode;
}

export const assets = [require('../../../assets/patterns/1.png')];

export function Container(props: IPropsContainer) {
  const { children, footer } = props;
  const { bottom } = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
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
      <Box height={bottom} />
    </Box>
  );
}
