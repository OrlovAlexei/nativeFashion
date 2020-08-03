import React from 'react';
import { Box, Text } from '../../../theme';
import { Button } from '../onboarding/components/button';

export function Welcome() {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      ></Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="grey" position="absolute" top={0} left={0} bottom={0} right={0}></Box>
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          alignItems="center"
          justifyContent="space-evenly"
          padding="xl"
        >
          <Text variant="title2">Let’s get started</Text>
          <Text textAlign="center" variant="body">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button variant="primary" label="Have an account? Login" onPress={() => {}} />
          <Button label="Join us, it’s Free" onPress={() => {}} />
          <Button variant="transparent" label="Forgot password?" onPress={() => {}} />
        </Box>
      </Box>
    </Box>
  );
}
