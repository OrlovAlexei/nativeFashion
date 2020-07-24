import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { Slide, SLIDE_HEIGHT, SubSlide, Dot } from './components';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import { slides } from './slides';

const { width } = Dimensions.get('window');

const BORDER_RADIUS = 75;

export function Onboarding() {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => width * index),
    outputRange: slides.map(({ color }) => color),
  });

  const onPressHandler = (index: number) => () => {
    if (!scroll.current) {
      return;
    }
    scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} isRight={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} index={index} currentIndex={divide(x, width)} />
            ))}
          </View>

          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index + 1 === slides.length;
              return <SubSlide key={index} onPress={onPressHandler(index)} {...{ subtitle, description, last }} />;
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: { height: SLIDE_HEIGHT, borderBottomRightRadius: BORDER_RADIUS },
  footer: { flex: 1 },
  footerContent: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: BORDER_RADIUS },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    height: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
