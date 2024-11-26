import { ThreadsCardColors, ThreadsCardTheme } from 'themes';
import { getRGB, rgba } from 'utils/colors';

const useBlurredBackground = (
  blurredBackground: boolean | undefined,
  colors: ThreadsCardColors | undefined,
  theme: ThreadsCardTheme
) => {
  if (blurredBackground) {
    const backgroundColor = colors?.background || theme.background;
    const rgb = getRGB(backgroundColor);
    if (rgb) {
      return {
        background: rgba(rgb, 0.6),
        backdropFilter: 'blur(8px)',
      };
    }
  }

  return {};
};

export default useBlurredBackground;
