import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
<<<<<<< HEAD

import Slide from '../components/Slide';
=======
import { SlideShow } from '../components/SlideShow';
>>>>>>> 9b020db7092db2285453dad80804e223c2568be8

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
      <Container style={{ flexDirection: 'column', width: '100%', height: '100%', marginTop: '111px',  background: 'black url(/star.png) fixed' }}>
        
        <SlideShow />
      </Container>
    </Container>
  );
}

export default Product;
