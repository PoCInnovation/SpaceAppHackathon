import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

import Slide from '../components/Slide';

const Container = styled.div`
  background: #2f3437;
  display: flex;
  border: none;
  overflow-x: hidden;
`;

function Product(): JSX.Element {
  const height = window.innerHeight;

  return (
    <Container style={{ flexDirection: 'column', height: window.innerHeight }}>
      <Header />
      <Slide
        title="Titre"
        paragraph="A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
        modelPath="danstoncul.com"
      />
    </Container>
  );
}

export default Product;
