import React, { ReactNode } from 'react';
import { AssetsLoader } from './assetsLoader';
import { fonts } from './fonts';

export function LoadAssets(props: { children: ReactNode }) {
  const { children } = props;

  return <AssetsLoader {...{ fonts }}>{children}</AssetsLoader>;
}
