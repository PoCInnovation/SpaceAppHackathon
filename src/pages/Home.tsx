import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Container = styled.div`
  background: black;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const LeftView = styled.div`
    width: 50%;
    height: 100%;
`;

const RightView = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
`;

const Astro = styled.div`
  position: absolute;
`;

const Title = styled.h1`
  font-size: 5em;
  z-index: 2; 
  color: white;
`;

const SubTitle = styled.h2`
  font-size: 2em;
  z-index: 2;
  color: white;
  text-align: justify;
`;

function Home(): JSX.Element {
  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
      <Container className="first-astro" style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
        <LeftView>
            <Title style={{ marginLeft: '10%', marginTop: '10%' }}>Test</Title>
            <SubTitle style={{ marginLeft: '10%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt fringilla augue, at pulvinar tellus egestas ac. Cras suscipit viverra tortor non interdum. Donec efficitur volutpat lacinia. </SubTitle>
        </LeftView>
        <RightView>
          <Astro style={{ right: '10%' }}>
            <img alt="astronaute" src="/astro_1.png" />
          </Astro>
        </RightView>
      </Container>
    </Container>
  );
}

export default Home;
