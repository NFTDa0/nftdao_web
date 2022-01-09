import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { black, white } from '../../common/value/color';
import { BtnLabelL, BtnLabelM, BtnLabelS, Description, H5, TextL, TextM, TextXL } from '../../common/value/text';
import { Cursor, Img, ImgDiv, QnaDiv, ReactiveDiv, RowDiv } from './component';

const Btn = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: 2px solid black;
  cursor: pointer;

`;

const MintBtn = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #6fcf97;
  justify-content: center;
  align-items: center;
  padding: 10px 31px;
  cursor: pointer;
`;

const RootDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 55px 42px;

  @media (max-width: 480px) {
    padding: 0 16px 32px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  padding: 32px 20px;
  /* width: 100%; */
  border-bottom: 2px solid black;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    padding: 20px 8px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 114px 65px 0;
  width: 484px;

  @media (max-width: 480px) {
    padding: 20px 36px;
    width: 302px;
  }
`;

const MapDiv = styled.div`
  padding: 66px 90px 0 0;

  @media (max-width: 480px) {
    padding: 32px 0 0 0;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 100px 40px;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  background-color: black;
  border-radius: 40px;
  width: 400px;
  

  @media (max-width: 480px) {
    
    width: 360px;
  }
`;

const CardHead = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 40px 20px 20px;

  border-bottom: 1px solid white;
`;

const CardBody = styled.div`
  display: flex;
  flex-flow: column;
  height: 244px;
  padding: 14px 24px 12px;
  justify-content: space-between;
  border-bottom: 1px solid white;

  @media (max-width: 480px) {
    height: auto;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 30px;
`;

const CheckDiv = styled.div`
`;


export default function Header({mobile}) {
  const [vital, setVital] = useState(0);
  const [prime, setPrime] = useState(0);

  const changeVital = (count) => {
    if (vital == 0 && count < 0) {
      return;
    }
    setVital(count);
  }

  const changePrime = (count) => {
    if (prime == 0 && count < 0) {
      return;
    }
    setPrime(count);
  }

  return (
    <ImgDiv src="/images/bg/BG-PC@2x.png" full={true}>
      <RootDiv>
        <HeaderDiv>
          <Img
            src="/images/NFTDAO_LOGO_BLACK.png" 
            alt="NFTDAO_LOGO_BLACK"
            width={mobile ? '192px' : '288px'}
          />
          <Btn>
            { mobile?
              <BtnLabelS>
                Connect
              </BtnLabelS>:
              <BtnLabelL>
                Connect Wallet
              </BtnLabelL>
            }
          </Btn>
        </HeaderDiv>
        <ReactiveDiv justifyContent='space-evenly'>
          <MainDiv>
            <Img
              src="/images/NFTdAO is cOOl.png" 
              alt="NFTdAO is cOOl"
              width={mobile ? '302px' : '484px'}
            />
            { mobile ?
              <Description margin='16px 0 0 0'>
                NFTDAO supports creators so that they can work without experiencing technical difficulties in the global NFT space.
              </Description>:
              <TextXL margin='40px 0 0 0'>
                NFTDAO supports creators so that they can work without experiencing technical difficulties in the global NFT space.
              </TextXL>
            }
            <ReactiveDiv margin={mobile ? '20px 0 0 0' :'96px 0 0 0'} gap={mobile ? '12px' : '24px'} justifyContent='flex-start' alignItems={mobile ? 'flex-start' : ''}>
              <Btn backgroundColor={black}>
                <RowDiv gap='10px' justifyContent='flex-start'>
                  { mobile ?
                    <BtnLabelS color={white}>
                      Join our Discord
                    </BtnLabelS> :
                    <BtnLabelL color={white}>
                      Join our Discord
                    </BtnLabelL>
                  }
                  <Img
                    src="/icons/Discord - Negative.png" 
                    alt="Discord - Negative"
                    width='20px'
                  />
                </RowDiv>
              </Btn>
              <Btn>
                { mobile ?
                  <BtnLabelS>
                    See collection
                  </BtnLabelS> :
                  <BtnLabelL>
                    See collection
                  </BtnLabelL>
                }
              </Btn>
            </ReactiveDiv>
          </MainDiv>
          <MapDiv>
            <Img
              src="/images/PC-HERO.png" 
              alt="PC-HERO"
              width= {mobile ? '284px' : '440px'}
            />
          </MapDiv>
        </ReactiveDiv>
      </RootDiv>
      <CardDiv>
        <ReactiveDiv gap='24px'>
          <Card>
            <CardHead>
              <Img
                src="/images/VITAL-PASS-CARD.png" 
                alt="VITAL-PASS-CARD"
                width='315px'
              />
              <RowDiv margin='12px 0 0 0' justifyContent='center' gap='5px'>
                <TextL color='#ff96d4'>9,000</TextL>
                <TextL color={white}>total</TextL>
              </RowDiv>
              <TextL color='#ff96d4' margin={mobile ? '9px 0 0 0' : '15px 0 0 0'}>And if you hold a PRIME PASS, you own...</TextL>
            </CardHead>
            <CardBody>
              <CheckDiv>
                <CheckRow content='Airdrop of DAO token, which gives governance rights'/>
                <CheckRow content='Opportunity to enter future launchpads'/>
                <CheckRow content='Quarterly dividends on marketplace revenue'/>
                <CheckRow content='Access to members-only Discord channels'/>
                <CheckRow content='More to come'/>
              </CheckDiv>
              <RowDiv justifyContent='flex-end'>
                <TextM color='#4f4f4f'>5 limits per wallet</TextM>
              </RowDiv>
            </CardBody>
            <CardFooter>
              <H5 color={white}>0.2 ETH</H5>
              <RowDiv gap='18px'>
                <Cursor onClick={() => changeVital(vital-1)}>
                  <H5 color='#6fcf97'>-</H5>
                </Cursor>
                <H5 color={white}>{vital}</H5>
                <Cursor onClick={() => changeVital(vital+1)}>
                  <H5 color='#6fcf97'>+</H5>
                </Cursor>
              </RowDiv>
              <MintBtn>
                <BtnLabelM>
                  MINT
                </BtnLabelM>
              </MintBtn>
            </CardFooter>
          </Card>
          <Card>
            <CardHead>
              <Img
                src="/images/PRIME-PASS-CARD.png" 
                alt="PRIME-PASS-CARD"
                width='315px'
              />
              <RowDiv margin='12px 0 0 0' justifyContent='center' gap='5px'>
                <TextL color='#c0b4f6'>1,000</TextL>
                <TextL color={white}>total</TextL>
              </RowDiv>
              <TextL color='#c0b4f6' margin='15px 0 0 0'>And if you hold a PRIME PASS, you own...</TextL>
            </CardHead>
            <CardBody>
              <CheckDiv>
                <CheckRow content='All the perquisites for standard pass'/>
                <CheckRow content='10x Airdrop of DAO Token'/>
                <CheckRow content='10x chance to win launchpads'/>
                <CheckRow content='Access to prime-only Discord channels'/>
                <CheckRow content='All the perquisites for standard pass'/>
                <CheckRow content='Opportunity to enter prime-only launchpads'/>
                <CheckRow content='More to come'/>
              </CheckDiv>
              <RowDiv justifyContent='flex-end'>
                <TextM color='#4f4f4f'>2 limits per wallet</TextM>
              </RowDiv>
            </CardBody>
            <CardFooter>
              <H5 color={white}>0.2 ETH</H5>
              <RowDiv gap='18px'>
                <Cursor onClick={() => changePrime(prime-1)}>
                  <H5 color='#6fcf97'>-</H5>
                </Cursor>
                <H5 color={white}>{prime}</H5>
                <Cursor onClick={() => changePrime(prime+1)}>
                  <H5 color='#6fcf97'>+</H5>
                </Cursor>
              </RowDiv>
              <MintBtn>
                <BtnLabelM>
                  MINT
                </BtnLabelM>
              </MintBtn>
            </CardFooter>
          </Card>
        </ReactiveDiv>
      </CardDiv>
    </ImgDiv>
  );
}

function CheckRow(props) {
  return (
    <RowDiv justifyContent='flex-start' gap='10px' margin='6px 0 0px 0'>
      <Img
        src="/icons/Selected.png" 
        alt="Selected"
        width='24px'
      />
      <TextM color={white}>
        {props.content}
      </TextM>
    </RowDiv>
  );
}