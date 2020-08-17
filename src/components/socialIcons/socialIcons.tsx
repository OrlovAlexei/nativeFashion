import React, { ReactNode } from 'react';
import { Box, theme } from '../../modules/theme';
import { Google } from './google';
import { Apple } from './apple';
import { Facebook } from './facebook';

const SIZE = theme.borderRadii.l * 2;

interface IPropsSocialIcons {}

export function SocialIcons(props: IPropsSocialIcons) {
  const {} = props;

  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
}

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <Box
      marginHorizontal="m"
      flexDirection="row"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
}
