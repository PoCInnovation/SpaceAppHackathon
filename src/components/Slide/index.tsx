import React from 'react';
import styled from 'styled-components';

import ModelRender from '../ModelRender';

const MyStyleSlide = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: justify;

  margin: 5%;
  width:40%;
  color: white;
  margin-bottom: 15%;
`;
const TitleText = styled.p`
  font-size: 3em;
`;
const ParaText = styled.p`
  font-size: 1.5em;
`;
const ModelContainer = styled.div`
  display: flex;
  margin: 5%;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

type SlideProps = {
  title: string;
  paragraph: string;
  modelPath: string;
};

function MySlide(props: SlideProps): JSX.Element {
  const { title, paragraph, modelPath } = props;

  return (
    <MyStyleSlide>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <ParaText>{paragraph}</ParaText>
      </TextContainer>
      <ModelContainer>
        <ModelRender />
      </ModelContainer>
    </MyStyleSlide>
  );
}

export default MySlide;
