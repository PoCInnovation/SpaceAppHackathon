import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import ParallelView from '../components/ParallelView';

const Container = styled.div`
  background: black;
  display: flex;
  border: none;
`;

function Home(): JSX.Element {
  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
      <Container style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
        <ParallelView style={{ backgroundColor: 'red', width: '60%', height: '100%' }} />
        <ParallelView style={{ backgroundColor: 'yellow', width: '40%', height: '100%' }} />
      </Container>
    </Container>
  );
}

export default Home;
