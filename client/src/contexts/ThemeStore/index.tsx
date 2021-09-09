import React from 'react';

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    $1: '#F6F6FA',
    $2: '#ECEDF5',
    $3: '#ECEDF5',
    $4: '#C5C9E1',
    $5: '#8992C1',
    $6: '#626DAD',
    $7: '#3B4998',
    $t1: '#9183A0',
    $t2: '#4F3866',
    $t3: '#391F54',
    $t4: '#230640',
    $y1: '#FFFBE6',
    $y6: '#FFF666',
  },
};

export type ThemeColorType = keyof typeof theme.colors

// eslint-disable-next-line arrow-body-style
const ThemeStoreProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeStoreProvider;
