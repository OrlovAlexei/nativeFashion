import React from 'react';
import { Container } from '../../../../components';
import { Text } from '../../../theme';
import { Footer } from '../../components';

interface IPropsLogin {}

export function Login(props: IPropsLogin) {
  const {} = props;

  const footer = <Footer onPress={() => alert('SignUp!')} text={['Don’t have an account?', 'Sign Up here']} />;

  return <Container {...{ footer }} children={<Text>Привет</Text>} />;
}
