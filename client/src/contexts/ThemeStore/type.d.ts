import { ThemeColorType } from '.';

declare module '@emotion/react' {
  interface Theme extends ThemeType { }
}

interface ThemeType {
  colors: Record<ThemeColorType, string>
}
