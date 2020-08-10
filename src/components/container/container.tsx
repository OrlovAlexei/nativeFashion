import { Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, theme } from '../../modules/theme';

const { width } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface IPropsContainer {
  children: ReactNode;
}

export const assets = [require('../../../assets/patterns/1.png')];

export function Container(props: IPropsContainer) {
  const { children } = props;
  return (
    <Box flex={1} backgroundColor="white">
      <StatusBar barStyle="light-content" />
      <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
        <Image source={assets[0]} style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />
      </Box>

      <Box flex={1} overflow="hidden">
        <Image source={assets[0]} style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }} />
        <Box borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white" flex={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
