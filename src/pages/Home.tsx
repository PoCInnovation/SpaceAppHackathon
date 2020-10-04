import React, { useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Container = styled.div`
  background: black;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const LeftView = styled.div`
  width: 60%;
  height: 100%;
`;

const RightView = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const LogoView = styled.a`
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  z-index: 3;
`;

const ArrowView = styled.a`
  position: absolute;
  bottom: 40px;
  left: 50%;
  z-index: 1;
  cursor: pointer;
`;

const Astro = styled.div`
  position: absolute;
`;

const Title = styled.h1`
  font-size: 5em;
  z-index: 2;
  color: white;
  font-family: 'Righteous', sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 2em;
  z-index: 2;
  color: white;
  text-align: justify;
`;

function Home(): JSX.Element {
  const endRef = useRef<HTMLDivElement>(document.createElement('div'));

  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight * 1.9 }}>
      <Header />
      <LogoView
        href="https://github.com/PoCInnovation"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="poc" src="/poc_logo.png" style={{ width: '20%', height: '20%' }} />
      </LogoView>
      <Container style={{ flexDirection: 'row', width: '100%', height: '50%', marginTop: '5%', backgroundImage: 'url(/star.png)', backgroundAttachment: 'fixed', position: 'relative' }}>
        <LeftView>
          <Title style={{ marginLeft: '10%', marginTop: '10%' }}>Caelus</Title>
          <SubTitle style={{ marginLeft: '10%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt fringilla augue, at pulvinar tellus egestas ac. Cras suscipit viverra tortor non interdum. Donec efficitur volutpat lacinia. </SubTitle>
        </LeftView>
        <RightView>
          <Astro style={{ left: '10%' }}>
            <img alt="astronaute" src="/astro_1.png" style={{ width: '90%', height: '90%' }} />
          </Astro>
        </RightView>
        <ArrowView onClick={() => endRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          <img alt="arrow" src="/down-arrow.svg" width="50" height="50" />
        </ArrowView>
      </Container>
      <Container style={{ flexDirection: 'row', height: '50%', color: 'white', backgroundImage: 'url(/moon.png)', backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat  ' }}>
        <LeftView style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe title="video" width="700" height="405" src="https://www.youtube.com/embed/pVddPNSzjZI" allowFullScreen />
        </LeftView>
        <RightView>
          <Astro style={{ right: '10%', top: '5%' }} ref={endRef}>
            <img alt="astronaute" src="/astro_2.png" style={{ width: '90%', height: '90%' }} />
          </Astro>
        </RightView>
      </Container>
    </Container>
  );
}

export default Home;
