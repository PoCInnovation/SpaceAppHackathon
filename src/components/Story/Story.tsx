import React from 'react';
import styled from 'styled-components';

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
    </div>
    <div style={{ width: '80%', margin: 'auto' }}>
      <MainPb>
        How can we increase the self-sufficiency 
        and efficiency of your astronauts ?
      </MainPb>
    </div>
  </StoryView>
);

export default Story;
