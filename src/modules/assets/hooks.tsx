import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';

export type FontSource = Parameters<typeof Font.loadAsync>[0];

const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

export const useLoadAssets = (assets: number[] = [], fonts: FontSource = {}): { ready: boolean } => {
  const [ready, setReady] = useState(false);
  usePromiseAll([Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))], () => setReady(true));
  return { ready };
};
