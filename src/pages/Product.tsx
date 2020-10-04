import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { SlideShow } from '../components/SlideShow';

const Container = styled.div`
  background: #2f3437;
  display: flex;
  border: none;
  overflow-x: hidden;
`;



function Product(): JSX.Element {
  const height = window.innerHeight;

  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight * 2 - 111 }}>
      <Header />
      <Container style={{ flexDirection: 'column', width: '100%', height: '100%', marginTop: '111px' }}>
        <SlideShow />
      </Container>
    </Container>
  );
}

export default Product;
