import React from 'react';
import { IconProps } from 'types/icon';

const FilterIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.2023 0.5H0.797801C0.0899769 0.5 -0.267189 1.35883 0.234344 1.86036L6.375 8.00195V14.8437C6.375 15.1038 6.50186 15.3474 6.7149 15.4966L9.37115 17.3553C9.89519 17.7221 10.625 17.3503 10.625 16.7025V8.00195L16.7658 1.86036C17.2663 1.35983 16.9116 0.5 16.2023 0.5Z"
      fill={color}
    />
  </svg>

);

export default FilterIcon;
