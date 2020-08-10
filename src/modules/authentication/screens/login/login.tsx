import React from 'react';
import { Container } from '../../../../components';
import { Text } from '../../../theme';

interface IPropsLogin {}

export function Login(props: IPropsLogin) {
  const {} = props;

  return <Container children={<Text>Привет</Text>} />;
}
