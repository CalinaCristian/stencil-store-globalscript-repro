import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'minrepro',
  globalScript: 'src/global/app.ts',
  outputTargets: [{ type: 'www', serviceWorker: null }],
};
