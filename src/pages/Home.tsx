import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Container = styled.div`
  background: black;
  display: flex;
  border: none;
  flex-direction: column;
`;

function Home(): JSX.Element {
  return (
    <Container style={{ height: window.innerHeight }}>
      <Header />
      <p style={{ color: 'white' }}>Home</p>
    </Container>
  );
}

export default Home;
