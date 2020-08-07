import React from 'react';
import { Header } from '../../../../components';
import { Text } from '../../../theme';

interface IPropsLogin {}

export function Login(props: IPropsLogin) {
  const {} = props;

  return <Header children={<Text>Привет</Text>} />;
}
