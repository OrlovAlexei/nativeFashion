import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';

interface IPropsButton {
  label: string;
  variant?: 'default' | 'primary';
  onPress: () => void;
}

export function Button(props: IPropsButton) {
  const { label, variant = 'default', onPress } = props;

  const backgroundColor = variant === 'primary' ? '#2CB9B0' : 'rgba(12,13,52,0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';

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
