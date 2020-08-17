import React, { ReactNode } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useTheme, Text } from '../../../../../theme';

interface IPropsButton {
  label?: string;
  variant?: 'default' | 'primary' | 'transparent';
  onPress: () => void;
  children?: ReactNode;
}

export function Button(props: IPropsButton) {
  const { colors } = useTheme();

  const { label, variant = 'default', onPress, children } = props;

  const backgroundColor =
    variant === 'primary' ? colors.primary : variant === 'transparent' ? 'transparent' : colors.grey;
  const color = variant === 'primary' ? colors.white : colors.secondary;

  return (
    <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
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
});
