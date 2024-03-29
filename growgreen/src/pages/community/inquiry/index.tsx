import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
import { communityLink } from '../index';

// 질문 및 고민 나누기 페이지
export default function Index() {
  return (
    <>
      <SubTitle>질문 & 고민</SubTitle>
      <Tab links={communityLink} index={1} />

      <div>질문 & 고민</div>
    </>
  );
}
