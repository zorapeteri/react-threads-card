import { ThreadsCardColors, ThreadsCardTheme } from 'themes';

const colorPrefix = '--threads-card-';

const getCSSVariables = (
  colors: ThreadsCardColors,
  theme: ThreadsCardTheme
) => ({
  ...Object.keys(theme).reduce(
    (a, b) => ({ ...a, [`${colorPrefix}${b}`]: (theme as any)[b] }),
    {}
  ),
  ...Object.keys(colors)
    .filter((key) => Object.keys(theme).includes(key))
    .reduce(
      (a, b) => ({ ...a, [`${colorPrefix}${b}`]: (colors as any)[b] }),
      {}
    ),
});

export default getCSSVariables;
