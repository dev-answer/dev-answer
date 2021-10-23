import React from 'react';
import { IconProps } from 'types/icon';

const BookmarkIcon: React.FC<IconProps> = ({ size, color = '#8992C1' }) => (
  <svg width={(size / 1.92)} height={size} viewBox="0 0 48 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path d="M0 84V0H40V84L20.5479 60.1328L0 84Z" fill={color} />
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width={48} height={92} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default BookmarkIcon;
