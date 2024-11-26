import React from 'react';
import useResizeObserver from 'use-resize-observer';

const useThreadsLogo = (ref: React.RefObject<HTMLDivElement>) => {
  const { width = 0, height = 0 } = useResizeObserver<HTMLDivElement>({
    ref,
    box: 'border-box',
  });

  return height > width && 'hideThreadsLogo';
};

export default useThreadsLogo;
