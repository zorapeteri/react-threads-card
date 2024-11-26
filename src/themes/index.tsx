import light from './light';
import dark from './dark';

export type ThreadsCardColors = {
  primary?: string;
  secondary?: string;
  accent?: string;
  muted?: string;
  background?: string;
  border?: string;
};

export type ThreadsCardTheme = Required<ThreadsCardColors>;

export type ThemeOption = 'light' | 'dark';

export default { light, dark };
