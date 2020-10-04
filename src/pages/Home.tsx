import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const SourcesLink = styled.a`
  display: block;
  position: fixed;
  z-index: 3;
  font-weight: bold;
  color: white;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
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
  font-size: 3em;
  z-index: 2;
  color: white;
`;

function Home(): JSX.Element {
  const endRef = useRef<HTMLDivElement>(document.createElement('div'));
  React.useEffect(() => window.scrollTo(0, 0), []);

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
          <Title style={{ marginLeft: '10%', marginTop: '10%', fontFamily: 'Righteous, sans-serif' }}>Caelus</Title>
          <SubTitle style={{ marginLeft: '10%' }}>Do not consider your suit solely for survival, let it become a tool. </SubTitle>
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
        <LeftView style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <iframe title="video" width="700" height="405" src="https://youtu.be/YWWb7l6svI8" allowFullScreen />
          <Link to="/product" style={{ fontFamily: 'Righteous', textDecoration: 'none', marginTop: '7%', backgroundColor: 'black', borderRadius: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15 }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>SEE FULL PRODUCT</span>
          </Link>
        </LeftView>
        <RightView>
          <Astro style={{ right: '10%', top: '5%' }} ref={endRef}>
            <img alt="astronaute" src="/astro_2.png" style={{ width: '90%', height: '90%' }} />
          </Astro>
        </RightView>
      </Container>
      <Link to="/sources" style={{ textDecoration: 'none' }}>
        <SourcesLink>
          Sources
        </SourcesLink>
      </Link>
    </Container>
  );
}

export default Home;
