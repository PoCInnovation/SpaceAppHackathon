import React from 'react';
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

const LogoView = styled.a`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 20px;
  margin-bottom: 20px;
`;

function Home(): JSX.Element {
  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
      <LogoView href="https://github.com/PoCInnovation" rel="noreferrer" target="_blank">
        <img alt="poc" src="/logo.png" style={{ width: '20%', height: '20%' }} />
      </LogoView>
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
