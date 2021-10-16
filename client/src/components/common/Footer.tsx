import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';
import Logo from '../../components/Icon/Logo';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <FooterArea>
      <Logo color={theme.colors.$3} />
      <CopyRights>Copyrights ⓒ 2021 All righrs reserved.</CopyRights>
    </FooterArea>
  );
};

const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.$t4};
  height: 124px;
`;

const CopyRights = styled.p`
  font-size: 12px;
  line-height: 115%;
  color: ${({ theme }) => theme.colors.$t2};
  margin-top: 24px;
`;

export default Footer;
