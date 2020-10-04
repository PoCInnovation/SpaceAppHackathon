import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import Story from '../components/Story/Story';
import { SlideShow } from '../components/SlideShow';
import Faq from '../components/Faq';
import questionsFaq from '../components/Faq/questions.json';
import responsesFaq from '../components/Faq/responses.json';

const Container = styled.div`
  background: #2f3437;
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

const ArrowView = styled.a`
  position: absolute;
  bottom: 40px;
  left: 50%;
  z-index: 1;
  cursor: pointer;
`;

function Product(): JSX.Element {
  const endRef = useRef<HTMLDivElement>(document.createElement('div'));

  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight * 3 }}>
      <Header />
      <Container style={{ flexDirection: 'column', width: '100%', height: '100%', marginTop: '5%' }}>
        <Story />
        <ArrowView onClick={() => endRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          <img alt="arrow" src="/down-arrow.svg" width="50" height="50" />
        </ArrowView>
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
}

export default Product;
