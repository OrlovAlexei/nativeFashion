import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../../../components';
import { Text } from '../../../theme';

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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
});
