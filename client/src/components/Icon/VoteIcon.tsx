import React from 'react';
import styled from '@emotion/styled';

import { IconProps } from '../../types/icon';

interface Props extends IconProps {
  count?: number
  countColor?: string
}

const VoteIcon: React.FC<Props> = ({
  size, color, count, countColor,
}) => (
  <Wrapper>
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5639 34.3475C14.0386 34.3475 13.5344 34.1408 13.1602 33.7721L1.44593 22.2302C0.650856 21.4468 0.650856 20.1643 1.44593 19.3809L19.7127 1.38289C20.4912 0.615825 21.7413 0.615755 22.5199 1.38274L35.6331 14.3001C36.4283 15.0835 36.4284 16.3661 35.6332 17.1496L18.7625 33.7721C18.3883 34.1408 17.8841 34.3475 17.3588 34.3475H14.5639Z"
        fill={color}
      />
      <path
        d="M3 36C3 35.4477 3.44772 35 4 35H34C34.5523 35 35 35.4477 35 36V38C35 38.5523 34.5523 39 34 39H4C3.44772 39 3 38.5523 3 38V36Z"
        fill={color}
      />
    </svg>
    {count && <Count color={countColor}>{count}</Count>}
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const Count = styled.div<{ color?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ color }) => color};
  font-size: 18px;
  font-weight: bold;
`;

export default VoteIcon;
