import { useRef, useMemo, HTMLAttributes } from 'react';
import useThreadsLogo from '../../hooks/useThreadsLogo';
import useFontSize from '../../hooks/useFontSize';
import classNameUtil from '../../utils/className';
import './Container.css';
import getCSSVariables from '../../utils/getCSSVariables';
import themes from '../../themes';
import globalClassName from '../../utils/globalClassName';
import useGradientBackground from '../../hooks/useGradientBackground';
import useBlurredBackground from '../../hooks/useBlurredBackground';
import useTheme from '../../hooks/useTheme';
import { ThreadsCardProps } from '../../main';
import css from './Container.module.css';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
} & Pick<
    ThreadsCardProps,
    | 'theme'
    | 'colors'
    | 'gradientBackground'
    | 'blurredBackground'
    | 'fitInsideContainer'
  >;

const Container = ({
  children,
  className,
  colors = {},
  gradientBackground,
  blurredBackground,
  fitInsideContainer = false,
  ...rest
}: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const threadsLogo = useThreadsLogo(containerRef);
  useFontSize(fitInsideContainer, containerRef);

  const theme = useTheme(rest.theme);

  const gradientStyle = useMemo(
    () => useGradientBackground(gradientBackground, colors, themes[theme]),
    [gradientBackground, theme, colors.background]
  );

  const blurredStyle = useMemo(
    () => useBlurredBackground(blurredBackground, colors, themes[theme]),
    [blurredBackground, theme, colors.background]
  );

  return (
    <div
      ref={containerRef}
      {...classNameUtil(
        globalClassName('container'),
        fitInsideContainer && css.fitInsideContainer,
        className,
        css.container,
        threadsLogo,
        gradientBackground && css.gradientBackground,
        gradientBackground && globalClassName('gradientBackground'),
        blurredBackground && css.blurredBackground,
        blurredBackground && globalClassName('blurredBackground')
      )}
      {...rest}
      style={{
        ...getCSSVariables(colors, themes[theme]),
        ...gradientStyle,
        ...blurredStyle,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
