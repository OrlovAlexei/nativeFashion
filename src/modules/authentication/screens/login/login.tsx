import React from 'react';
import { Container } from '../../../../components';
import { Text, Box } from '../../../theme';
import { Footer } from '../../components';
import { TextField } from '../../components/textField/textField';
import { KeyboardAvoidingView } from 'react-native';

interface IPropsLogin {}

export function Login(props: IPropsLogin) {
  const {} = props;

  const footer = <Footer onPress={() => alert('SignUp!')} text={['Don’t have an account?', 'Sign Up here']} />;

  return (
    <Container {...{ footer }}>
      <KeyboardAvoidingView behavior={'position'} style={{ flex: 1, position: 'absolute' }}>
        <Box padding="xl">
          <Text variant="title1" textAlign="center" marginBottom="l">
            Welcome back
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Use your credentials below and login to your account
          </Text>
          <TextField marginBottom="m" icon="mail" placeholder="Enter your Email" validator={() => true} />
          <TextField icon="lock" placeholder="Enter your Password" validator={() => true} />
        </Box>
      </KeyboardAvoidingView>
    </Container>
  );
}
