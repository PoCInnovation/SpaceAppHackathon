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
    <Title>HISTOIRE</Title>
    <div style={{ margin: 'auto', width: '60%', textAlign: 'justify' }}>
      <StoryP>
        Vous êtes une agence spatiale et le programme Artémis est en place. Depuis la Terre,
        vous supervisez une mission sur la Lune. Votre groupe d'astronautes se prépare pour
        aller effectuer une analyse minéralogique d'un cratère situé à 8 Km de leur position.
      </StoryP>

      <StoryP>
        Pour effectuer cette mission, vos astronautes vont avoir
        besoins de votre supervision pour se rendre
        au point d'intérêt, pour se déplacer, s'orienter et installer le matériel.
      </StoryP>

      <StoryP>
        Lorsqu'ils montent sur le Rover, vous aller les guider,
        tournant par tournant, cratère par cratère,
        à l’affût de la moindre erreur.
      </StoryP>
      <StoryP>
        Une fois arrivés sur place, vous leur dictez
        le protocol d'installation du matériel étape par étape.
        L'analyse poura alors commencer.
      </StoryP>
      <StoryP>
        Résultat, vous avez dû passer plusieurs heures à superviser l'équipe.
        Cependant, vous n'avez pas que cette équipe à encadrer.
      </StoryP>
    </div>
    <div style={{ width: '80%', margin: 'auto' }}>
      <MainPb>
        N'y aurait-il pas moyen d'améliorer
        l'autonomie et l'efficacité des astronautes ?
      </MainPb>
    </div>
  </StoryView>
);

export default Story;
