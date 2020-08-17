import React from 'react';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

interface IPropsDot {
  currentIndex: Animated.Node<number>;
  index: number;
}

export function Dot(props: IPropsDot) {
  const { currentIndex, index } = props;

  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        backgroundColor: '#2CB9B0',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        opacity,
        transform: [{ scale }],
      }}
    ></Animated.View>
  );
}
