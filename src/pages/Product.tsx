import React, { useState } from 'react';
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
  text-align: center;
  height: ${window.innerHeight - 111}px;
  color: white;
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


function Product(): JSX.Element {
  const height = window.innerHeight - 111;

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
          <Title>Test</Title>
          <div style={{ margin: 'auto', width: '85%' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas 
              risus eu arcu congue iaculis. Vestibulum arcu tortor, vestibulum fringilla
              congue non, condimentum id nulla. Ut porttitor, turpis ac scelerisque finibus,
              mi diam congue magna, eu blandit ligula turpis eget velit. Morbi enim mi, 
              venenatis eu eros non, fringilla molestie augue. Morbi pharetra felis quis 
              purus dictum faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Curabitur quis pharetra quam. Integer eu rhoncus ante.
            </p>

            <p>
              Aliquam venenatis blandit massa eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae lectus sem. Aliquam blandit odio turpis, eget volutpat sem posuere in. Curabitur maximus nisl eget placerat congue. Mauris consectetur at elit nec hendrerit. Phasellus egestas eros urna, at elementum nunc commodo id. Mauris vel nunc massa. Nam interdum nisl vitae sapien iaculis, sit amet feugiat dolor vestibulum. Donec non iaculis ligula. Vivamus sagittis vehicula lectus non scelerisque. Maecenas egestas eros vehicula, scelerisque nunc id, aliquet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas condimentum aliquam nisl. Donec tincidunt felis eu leo fringilla, vel tincidunt dolor ornare. Nunc tincidunt varius consectetur.
            </p>
          </div>
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
