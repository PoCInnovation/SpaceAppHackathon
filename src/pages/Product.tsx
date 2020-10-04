import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
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

const ArrowView = styled.a`
  position: absolute;
  bottom: 40px;
  left: 50%;
  z-index: 1;
  cursor: pointer;
`;

const SourceLink = styled.a`
  display: block;
  font-weight: bold;
  position: fixed;
  z-index: 3;
  color: white;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
`;

function Product(): JSX.Element {
  const endRef = useRef<HTMLDivElement>(document.createElement('div'));

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
      <Link to="/sources" style={{ textDecoration: 'none' }}>
        <SourceLink>
          Sources
        </SourceLink>
      </Link>
    </Container>
  );
}

export default Product;
