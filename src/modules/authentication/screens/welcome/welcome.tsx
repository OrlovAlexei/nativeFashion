import React from 'react';
import { Box, Text } from '../../../theme';
import { Button } from '../onboarding/components/button';
import { StackNavigationProps } from '../../../navigation';

interface IPropsWelcome extends StackNavigationProps<'Welcome'> {}

export function Welcome(props: IPropsWelcome) {
  const { navigation } = props;
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey" alignItems="center" justifyContent="flex-end" />
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="grey" position="absolute" top={0} left={0} bottom={0} right={0} />
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
          <Button variant="primary" label="Have an account? Login" onPress={() => navigation.navigate('Login')} />
          <Button label="Join us, it’s Free" onPress={() => {}} />
          <Button variant="transparent" label="Forgot password?" onPress={() => {}} />
        </Box>
      </Box>
    </Box>
  );
}
