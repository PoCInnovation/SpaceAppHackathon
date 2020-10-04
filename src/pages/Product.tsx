import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Story from '../components/Story/Story';
import { SlideShow } from '../components/SlideShow';
import Faq from '../components/Faq';
import questionsFaq from '../components/Faq/questions.json';
import responsesFaq from '../components/Faq/responses.json';

const Container = styled.div`
  background: #000;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const LogoView = styled.a`
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  z-index: 3;
`;

const SourceLink = styled.a`
  display: block;
  font-weight: bold;
  position: fixed;
  z-index: 3;
  color: white;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
`;

const InfoText = styled.p`
  display: block;
  position: sticky;
  font-weight: bold;
  z-index: 3;
  color: white;
  bottom: 10px;
  margin-top: 0px;
  align-self: center;
`;

function Product(): JSX.Element {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Container style={{ flexDirection: 'column' }}>
      <Header />
      <Container style={{ flexDirection: 'column', marginTop: '5%' }}>
        <Story />
        <Faq questions={questionsFaq} responses={responsesFaq} />
        <SlideShow />
        <InfoText>
          Use to the circular icon to switch between 2D and 3D.
        </InfoText>
        <InfoText>
          You can rotate the model by dragging it around - You can move it by pressing the ctrl key - You can zoom in/out by scrolling
        </InfoText>
      </Container>
      <LogoView
        href="https://github.com/PoCInnovation"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="poc" src="/poc_logo.png" style={{ width: '20%', height: '20%' }} />
      </LogoView>
      <Link to="/sources" style={{ textDecoration: 'none' }}>
        <SourceLink>
          Sources
        </SourceLink>
      </Link>
    </Container>
  );
}

export default Product;
