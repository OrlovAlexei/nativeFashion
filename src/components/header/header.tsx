import { Dimensions } from 'react-native';
import React, { ReactNode } from 'react';
import { Box } from '../../modules/theme';
import Logo from '../../../assets/patterns/1.svg';

const { width } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface IPropsHeader {
  children: ReactNode;
}

export const assets = [require('../../../assets/patterns/1.svg')];

export function Header(props: IPropsHeader) {
  const { children } = props;
  return (
    <Box flex={1}>
      <Box>
        <Logo style={{ width, height }} />
      </Box>
    </Box>
  );
}
