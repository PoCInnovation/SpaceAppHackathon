import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';


const Container = styled.div`
  background: #2f3437;
  display: flex;
  border: none;
  overflow-x: hidden;
`;



function Product(): JSX.Element {
  const height = window.innerHeight;

  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
    </Container>
  );
}

export default Product;
