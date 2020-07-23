import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

interface IPropsSlide {
  title: string;
  isRight?: boolean;
}

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = height * 0.61;

export function Slide(props: IPropsSlide) {
  const { title, isRight } = props;

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: isRight ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: isRight ? '-90deg' : '90deg' },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: { height: 100, justifyContent: 'center' },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center',
  },
});
