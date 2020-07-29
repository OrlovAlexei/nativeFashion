import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../../../theme/theme';

interface IPropsButton {
  label: string;
  variant?: 'default' | 'primary';
  onPress: () => void;
}

export function Button(props: IPropsButton) {
  const { colors } = useTheme();

  const { label, variant = 'default', onPress } = props;

  const backgroundColor = variant === 'primary' ? colors.primary : colors.white;
  const color = variant === 'primary' ? 'white' : colors.body;

  return (
    <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
  },
});
