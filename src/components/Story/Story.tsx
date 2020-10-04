import React from 'react';
import styled from 'styled-components';
import storyJson from './story.json';

const StoryView = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

const StoryP = styled.p`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 1.5em;
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

const Story = ():JSX.Element => (
  <StoryView style={{ height: '100%' }}>
    <Title>Story</Title>
    <div style={{ margin: 'auto', width: '60%', textAlign: 'justify' }}>
      {
        storyJson.map((item) => <StoryP>{item}</StoryP>)
      }
    </div>
    <div style={{ width: '80%' }}>
      <MainPb>
        How can we increase the self-sufficiency
        and efficiency of your astronauts ?
      </MainPb>
    </div>
  </StoryView>
);

export default Story;
