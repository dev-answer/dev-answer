import React from 'react';

import { IconProps } from 'types/icon';

const HambugerIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill={color} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="6" rx="2" fill={color} />
    <rect y="10" width="36" height="6" rx="2" fill={color} />
    <rect y="20" width="36" height="6" rx="2" fill={color} />
    <rect y="30" width="36" height="6" rx="2" fill={color} />
  </svg>

);

export default HambugerIcon;
