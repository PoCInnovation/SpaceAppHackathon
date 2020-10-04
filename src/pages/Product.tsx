import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Container = styled.div`
  background: #2f3437;
  display: flex;
  border: none;
`;

function Product(): JSX.Element {
  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
      <p>Product</p>
    </Container>
  );
}

export default Product;
