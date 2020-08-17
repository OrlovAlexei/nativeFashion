import React from 'react';
import { Text, Box } from '../../../theme';
import { Button } from '../../../../components';

interface IPropsFooter {
  onPress: () => void;
  text: [string, string];
}

export function Footer(props: IPropsFooter) {
  const { onPress, text } = props;

  return (
    <Box alignItems="center">
      <Button variant="transparent" {...{ onPress }}>
        <Box flexDirection="row" justifyContent="center">
          <Text variant="button" color="white">
            {text[0]}
          </Text>
          <Text marginLeft="s" variant="button" color="primary">
            {text[1]}
          </Text>
        </Box>
      </Button>
    </Box>
  );
}
