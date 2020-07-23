import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Slide, SLIDE_HEIGHT } from './components';

const { width } = Dimensions.get('window');

export function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" isRight />
          <Slide label="Excentric" />
          <Slide label="Funky" isRight />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'cyan' }}></View>
        <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: { height: SLIDE_HEIGHT, borderBottomRightRadius: 75, backgroundColor: 'cyan' },
  footer: { flex: 1 },
});
