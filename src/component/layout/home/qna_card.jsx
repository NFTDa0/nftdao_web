import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { FooterLabel, H7, TextXL } from '../../common/value/text';
import { white } from '../../common/value/color';
import { isMobile as mobile } from 'react-device-detect';

const RootDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 32px 0;
  gap: 18px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  cursor: pointer;
`;

const AnswerDiv = styled.div`
  padding: 0 0 0 45px;
`;

const Img = styled.img`
  height: ${(props) => props.width};
  width: ${(props) => props.width};
  object-fit: 'cover';
  display: display-inside;
`;

export default function QnaCard({question, answer, mobile}) {
  const [open, setOpen] = useState(false);
  
  return (
    <RootDiv  open={open}>
      <RowDiv onClick={() => setOpen(!open)}>
         { open 
           ? <Img 
              src="/icons/Close_Icon.png" 
              alt="Close_Icon"
              width='24px'
            />
          : <Img 
              src="/icons/control.png" 
              alt="control"
              width='24px'
            />
         }  
        { mobile ?
          <H7>
            {question}
          </H7> :
          <TextXL>
            {question}
          </TextXL>
        }
      </RowDiv>
      { open ?
        mobile ?
          <AnswerDiv>
            <H7>
              {answer}
            </H7> 
          </AnswerDiv> :
          <AnswerDiv>
            <TextXL>
              {answer}
            </TextXL> 
          </AnswerDiv>
        : <></>
      }
    </RootDiv>
  );
}