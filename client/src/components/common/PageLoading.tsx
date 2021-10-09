import styled from '@emotion/styled';
import React from 'react';

import Character from '../../assets/character.gif';

const PageLoading: React.FC = () => (
  <LoadingArea>
    <Image src={Character} />
    <Text>로딩중</Text>
  </LoadingArea>
);

const LoadingArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Image = styled.img`
  width: 300px;
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.$7};
`;

export default PageLoading;
