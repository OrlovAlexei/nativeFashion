import React from 'react';
import { Container, SocialIcons } from '../../../../components';
import { Text, Box } from '../../../theme';
import { Button } from '../onboarding/components/button';

interface IPropsLogin {}

export function Login(props: IPropsLogin) {
  const {} = props;

  const footer = (
    <>
      <SocialIcons />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('SignUp!')}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don’t have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return <Container {...{ footer }} children={<Text>Привет</Text>} />;
}
