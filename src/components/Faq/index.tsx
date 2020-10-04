import React from 'react';
import styled from 'styled-components';

const Question = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const Answer = styled.p`
  font-size: 18px;
`;

const FaqView = styled.div`
  padding: 20px;
  color: white;
`;

interface FaqProps {
  questions: string[],
  responses: string[]
};

function Faq({questions, responses}: FaqProps): JSX.Element {
  const height = window.innerHeight - 111;
  
  return (
    <FaqView style={{ height }}>
      {
        questions.map((e, index) => (
            <div>
              <Question key={index}>{e}</Question>
              <Answer key={index}>{responses[index]}</Answer>
            </div>
        ))
      }
    </FaqView>
  );
}

export default Faq;
