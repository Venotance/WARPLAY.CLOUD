import { FC } from 'react';

import { SvgInterface, SvgWrapper } from '~shared/layouts/svg-layout/index';

interface YouTubeIconInterface extends SvgInterface {}

export const YouTubeIcon: FC<YouTubeIconInterface> = ({
  width = 24,
  height = 24,
  fill = '#d7d7d7',
  className,
}) => (
  <SvgWrapper className={className} width={width} height={height}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill}>
      <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
    </svg>
  </SvgWrapper>
);
