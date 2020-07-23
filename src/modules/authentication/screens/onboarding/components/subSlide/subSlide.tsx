import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../button';

interface IPropsSubSlide {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

export function SubSlide(props: IPropsSubSlide) {
  const { description, subtitle, last, onPress } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button label={last ? 'Lets get started' : 'Next'} variant={last ? 'primary' : 'default'} {...{ onPress }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
});
