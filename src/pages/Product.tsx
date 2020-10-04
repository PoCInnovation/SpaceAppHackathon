import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import Story from '../components/Story/Story';
import { SlideShow } from '../components/SlideShow';
import Faq from '../components/Faq';
import questionsFaq from '../components/Faq/questions.json';
import responsesFaq from '../components/Faq/responses.json';

const Container = styled.div`
  background: #000;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const LogoView = styled.a`
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  z-index: 3;
`;

const Product = (): JSX.Element => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Container style={{ flexDirection: 'column' }}>
      <Header />
      <Container style={{ flexDirection: 'column', marginTop: '5%' }}>
        <Story />
        <Faq questions={questionsFaq} responses={responsesFaq} />
        <SlideShow />
      </Container>
      <LogoView
        href="https://github.com/PoCInnovation"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="poc" src="/poc_logo.png" style={{ width: '20%', height: '20%' }} />
      </LogoView>
    </Container>
  );
};

export default Product;
