import React from 'react';

import styled from '@emotion/styled';

import CommentList from '../components/Comment/CommentList';
import CommentInputForm from '../components/Comment/CommentInputForm';
import FilterIcon from '../components/Icon/FilterIcon';

const CommentPage: React.FC = () => (
  <Section>
    <CommentHeader>
      <H2>A</H2>
      <AlignButton type="button">
        <ButtonText>
          시간순
        </ButtonText>
        <IconWrapper>
          <FilterIcon size={16} color="#8992C1" />
        </IconWrapper>
      </AlignButton>
    </CommentHeader>
    {/* // TODO : 임시로 questionId: 1 불러옴. 질문 상세 페이지 완성 후 변수화 시킬 예정 */}
    <CommentList questionId={1} />
    <CommentInputForm />
  </Section>
);

const CommentHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

const H2 = styled.h2`
  margin-left: 32px;
  font-weight: bold;
  font-size: 48px;
  line-height: 40px;
  color: #8992C1;
`;

const ButtonText = styled.span`
  position: relative;
  left: -4px;
`;

const IconWrapper = styled.span`
  position: relative;
  top: 2px;
  left: 8px;
`;

const AlignButton = styled.button`
  margin-right: 50px;
  background: #ECEDF5;
  border: 1px solid #ECEDF5;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const Section = styled.section`
  position: relative;
  background: #C5C9E1;
  height: 704px;
  width: 664px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default CommentPage;
