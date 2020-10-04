import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import sourcesJson from './sources.json';

const Container = styled.div`
  display: flex;
  border: none;
  overflow-x: hidden;
`;

const SourcesLink = styled.li`
  font-size: 20px;
  margin-bottom: 15px;
`;

function Sources() : JSX.Element {
  return (
    <Container style={{ flexDirection: 'column' }}>
      <Header />
      <Container style={{ flexDirection: 'column', marginTop: '5%' }}>
        <ul>
          {
            sourcesJson.map((item) => (
              <SourcesLink><a href={item} target="_blank">{item}</a></SourcesLink> 
            ))
          }
        </ul>
      </Container>
    </Container>
  );
}

export default Sources;