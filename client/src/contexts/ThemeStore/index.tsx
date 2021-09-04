import React from 'react';

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    // TODO: 색상 명은 디자이너분과 커뮤니케이션 후 더 적절한 것으로 바꿀 예정
    $gray0: '#EAEAEA',
    $gray1: '#C4C4C4',
    $gray2: '#A1A1A1',
    $gray3: '#757575',
    $blue1: '#F6F6FA',
    $blue2: '#ECEDF5',
    $blue4: '#C5C9E1',
    $blue5: '#8992C1',
    $blue6: '#626DAD',
    $blue7: '#3B4998',
    $pupple1: '#9183A0',
    $pupple2: '#4F3866',
    $pupple3: '#391F54',
    $pupple4: '#230640',
    $yellow1: '#FFFBE6',
    $yellow6: '#FFF666',
  },
};

export type ThemeColorType = keyof typeof theme.colors

// eslint-disable-next-line arrow-body-style
const ThemeStoreProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeStoreProvider;
