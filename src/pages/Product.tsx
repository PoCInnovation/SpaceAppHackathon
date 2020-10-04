import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { SlideShow } from '../components/SlideShow';
import Faq from '../components/Faq';
import questionsFaq from '../components/Faq/questions.json';
import responsesFaq from '../components/Faq/responses.json';

const Container = styled.div`
  background: #2f3437;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const StoryView = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const StoryP = styled.p`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 1.5em;
`;

const LogoView = styled.a`
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  z-index: 3;
`;

const Title = styled.h1`
   font-size: 4em;
   font-weight: bold;
   margin: 1em 0 1em 0;
`;

const MainPb = styled.h3`
  margin-top: 2.5em;
  font-size: 2.5em;
`;

const ArrowView = styled.a`
  position: absolute;
  bottom: 40px;
  left: 50%;
  z-index: 1;
  cursor: pointer;
`;

function Product(): JSX.Element {
  const height = window.innerHeight - 111;
  const endRef = useRef<HTMLDivElement>(document.createElement('div'));

  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight * 3 }}>
      <Header />
      <Container style={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: '5%',
        background: 'black url(/star.png) fixed' }}
      >
        <StoryView style={{ height: '100%' }}>
          <Title>HISTOIRE</Title>
          <div style={{ margin: 'auto', width: '70%', textAlign: 'justify' }}>
            <StoryP>
              You are a space Agency and the Artemis program is in place. From Earth, you oversee a mission on the Moon.
            </StoryP>

            <StoryP>
              Your team of astronauts is getting ready to perform a geological analysis of a crater 8 Km away from their position.
            </StoryP>

            <StoryP>
              To carry the mission out, your astronauts needs your supervision to get around, orient themselves and establish the equipment.
            </StoryP>
            <StoryP>
              When they get on the Rover, you guide them, turn by turn, crater by crater, on the lookout for the slightest mistake.
            </StoryP>
            <StoryP>
              Once arrived, you dictate them the installation protocol, step by step. The analysis can then begin.
            </StoryP>
            <StoryP>
              As a result, you spent multiples hours overseeing the team. However, it is not the only team you have to lead.
            </StoryP>
            <MainPb>How can we increase the self-sufficiency and efficiency of your astronauts ?</MainPb>
          </div>
          <ArrowView onClick={() => endRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <img alt="arrow" src="/down-arrow.svg" width="50" height="50" />
          </ArrowView>
        </StoryView>
        <Faq questions={questionsFaq} responses={responsesFaq} />
        <SlideShow />
      </Container>
      <LogoView
        href="https://github.com/PoCInnovation"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="poc" src="/poc_logo.png" style={{ width: '20%', height: '20%' }} />
      </LogoView>
    </Container>
  );
}

export default Product;
