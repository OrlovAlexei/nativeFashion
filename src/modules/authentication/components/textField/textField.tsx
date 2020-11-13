import React, { useState } from 'react';
import { Box, theme } from '../../../theme';
import { Feather as Icon } from '@expo/vector-icons';
import { TextInput, StyleSheet } from 'react-native';

interface IPropsTextField {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;

  marginBottom?: keyof typeof theme.spacing;
}

const SIZE = 20;

export function TextField(props: IPropsTextField) {
  const { icon, placeholder, validator, marginBottom } = props;

  const [valid, setValid] = useState<null | boolean>(null);
  // const [borderColor, setBorderColor] = useState();

  const reColor = valid === null ? 'body' : valid ? 'primary' : 'danger';
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderRadius="s"
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
      {...{ marginBottom }}
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <TextInput underlineColorAndroid="transparent" placeholderTextColor={color} {...{ placeholder, validator }} />
      {valid !== null && (
        <Box borderRadius="m" height={SIZE} width={SIZE}>
          <Icon name={valid ? 'check' : 'x'} size={16} {...{ color }} />
        </Box>
      )}
    </Box>
  );
}
