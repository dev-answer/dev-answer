import styled from '@emotion/styled';
import React from 'react';

import { IconProps } from '../../types/icon';

interface Props extends IconProps {
  count?: number
  countColor?: string
}

const CommentIcon: React.FC<Props> = ({
  size, color, count, countColor,
}) => (
  <Wrapper>

    <svg width={size} height={size} viewBox="0 0 35 35" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.4272 29.3679C27.044 29.3679 26.0437 27.1434 25.7543 25.6887H31.5764C32.9561 25.6887 34.0801 24.5566 34.0801 23.167V3.0217C34.0801 1.63208 32.9561 0.5 31.5764 0.5H2.58372C1.20405 0.5 0.0800781 1.63208 0.0800781 3.0217V23.167C0.0800781 24.5566 1.20405 25.6887 2.58372 25.6887H21.205C22.1688 28.8811 25.271 30.5 30.4272 30.5V29.3679Z"
        fill={color}
      />
    </svg>
    {typeof count === 'number' && <Count color={countColor}>{count}</Count>}
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const Count = styled.div<{ color?: string }>`
  position: absolute;
  top: calc(50% - 4px);
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ color }) => color};
  font-weight: bold;
`;

export default CommentIcon;
