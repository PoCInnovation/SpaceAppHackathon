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
        <LeftView />
        <RightView>
          <img alt="astronaute" src="/astro_1.png" style={{ width: '100%', height: '100%' }} />
        </RightView>
      </Container>
    </Container>
  );
}

export default Home;
