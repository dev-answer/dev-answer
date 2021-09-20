import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import styled from '@emotion/styled';

import { useGetRootElement } from '../../contexts/RootElement';
import { getFadeInOutAnimation } from '../../style';
import { ANIMATION_DURATION } from '../../constants/style';

interface Props {
  translateY?: string
}

const BottomSheet: React.FC<Props> = ({ children, translateY = '50%' }) => {
  const [overlayMount, setOverlayMount] = useState(false);
  const [overlayAnimation, setOverlayAnimation] = useState(false);

  const rootElement = useGetRootElement();

  const handleMouseOver = () => {
    setOverlayAnimation(true);
    setOverlayMount(true);
  };

  const handleMouseOut = () => {
    setOverlayAnimation(false);
    setTimeout(() => setOverlayMount(false), ANIMATION_DURATION);
  };

  return (
    <>
      <BottomSheetArea
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        translateY={translateY}
      >
        {children}
      </BottomSheetArea>
      {(overlayMount || overlayAnimation)
        && createPortal(<Overlay show={overlayAnimation} />, rootElement)}
    </>
  );
};

const BottomSheetArea = styled.section<{ translateY: string}>`
  position: fixed;
  width: 100%;
  bottom: 0;
  transform: translate3d(0, ${({ translateY }) => translateY}, 0);
  transition: 300ms;
  z-index: 2;

  :hover {
    transform: translate3d(0, 0, 0);
  }
`;

const Overlay = styled.div<{ show: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: black;
  ${({ show }) => getFadeInOutAnimation(show, ANIMATION_DURATION)}
`;

export default BottomSheet;
