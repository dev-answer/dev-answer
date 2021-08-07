import React from 'react';
import { IconProps } from 'types/icon';

const BookmarkIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg width={size / 2} height={size} viewBox="0 0 25 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 46V0H25V46L12.8425 32.9299L0 46Z"
      fill={color}
    />
  </svg>

);

export default BookmarkIcon;
