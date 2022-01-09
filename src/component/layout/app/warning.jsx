
import { useState } from 'react';
import { isMobile as mobile } from 'react-device-detect';
import styled from 'styled-components';
import { white } from '../../common/value/color';
import { BtnLabelL, TextM } from '../../common/value/text';
import { Cursor, Img } from '../home/component';

const RootDiv = styled.div`
  display: flex;
  padding: 18px 24px;
  justify-content: start;
  align-items: center;
  gap: 20px;
  background-color: black;
`;

export default function Warning({mobile}) {
  const [show, setShow] = useState(true);
  return ( <>
    { show
          ?<RootDiv>
            <Cursor onClick={() => setShow(false)}>
              <Img
                src="/icons/white_Close_Icon.png" 
                alt="white_Close_Icon"
                width='24'
              />
            </Cursor>
            { mobile
              ? <TextM color={white}>
                  Your wallet is currently connected to a different network. Please change it to the Ethereum mainnet to continue.
                </TextM>
              : <BtnLabelL color={white}>
                  Your wallet is currently connected to a different network. Please change it to the Ethereum mainnet to continue.
                </BtnLabelL>
            }
          </RootDiv>
      : <></>
    } 
    </>
  );
}
