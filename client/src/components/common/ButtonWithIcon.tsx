import React, { ComponentType } from 'react';

import styled from '@emotion/styled';

interface ButtonWithIconProps {
  width: number
  height: number
  text: string
  Icon: ComponentType;
}

// TODO : 디자이너 분과 상의(버튼 UI) 후 좀더 확장성 있는 컴포넌트로 수정할 예정

const ButtonWithIcon = ({
  width,
  height,
  text,
  Icon,
}: ButtonWithIconProps) => (
  <Button type="button" width={width} height={height}>
    <span>{text}</span>
    <Icon />
  </Button>
);

const Button = styled.button<{ width: number, height: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => (`${width}`)}px;
  height: ${({ height }) => (`${height}`)}px;

  background: #C5C9E1;
  border-radius: 10px;

  & span {
    margin-right: 8px;
    color: #230640;
  }
`;

export default ButtonWithIcon;
