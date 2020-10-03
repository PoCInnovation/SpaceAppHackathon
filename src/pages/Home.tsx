import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Container = styled.div`
  background: black;
  display: flex;
  border: none;
`;

const LeftView = styled.div`
    width: 60%;
    height: 100%;
`;

const RightView = styled.div`
    width: 40%;
    height: 100%;
`;

function Home(): JSX.Element {
  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
      <Container style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
        <LeftView style={{ backgroundColor: 'red' }} />
        <RightView style={{ backgroundColor: 'yellow' }} />
      </Container>
    </Container>
  );
}

export default Home;
