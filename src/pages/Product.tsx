import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { SlideShow } from '../components/SlideShow';

const Container = styled.div`
  background: #2f3437;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const StoryView = styled.div`
  position: relative;
  text-align: center;
  height: ${window.innerHeight - 111}px;
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
    <Container style={{ flexDirection: 'column', height: window.innerHeight * 2 }}>
      <Header />
      <Container style={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: '111px',
        background: 'black url(/star.png) fixed' }}
      >
        <StoryView>
          <Title>HISTOIRE</Title>
          <div style={{ margin: 'auto', width: '50%', textAlign: 'justify' }}>
            <StoryP>
              Vous êtes une agence spatiale et le programme Artémis est en place. Depuis la Terre,
              vous supervisez une mission sur la Lune. Votre groupe d'astronautes se prépare pour
              aller effectuer une analyse minéralogique d'un cratère situé à 8 Km de leur position.
            </StoryP>

            <StoryP>
              Pour effectuer cette mission, vos astronautes vont avoir besoins de votre supervision pour se rendre
              au point d'intérêt, pour se déplacer, s'orienter et installer le matériel.
            </StoryP>

            <StoryP>
              Lorsqu'ils montent sur le Rover, vous aller les guider, tournant par tournant, cratère par cratère,
              à l’affût de la moindre erreur.
            </StoryP>
            <StoryP>
              Une fois arrivés sur place, vous leur dictez le protocol d'installation du matériel étape par étape.
              L'analyse poura alors commencer.
            </StoryP>
            <StoryP>
              Résultat, vous avez dû passer plusieurs heures à superviser l'équipe. Cependant, vous n'avez pas que cette équipe à encadrer.
            </StoryP>
            <MainPb>N'y aurait-il pas moyen d'améliorer l'autonomie et l'efficacité des astronautes ?</MainPb>
          </div>

          <ArrowView onClick={() => endRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <img alt="arrow" src="/down-arrow.svg" width="50" height="50" />
          </ArrowView>
        </StoryView>
        <SlideShow />
      </Container>
      <LogoView
        href="https://github.com/PoCInnovation"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="poc" src="/logo.png" style={{ width: '20%', height: '20%' }} />
      </LogoView>
    </Container>
  );
}

export default Product;
