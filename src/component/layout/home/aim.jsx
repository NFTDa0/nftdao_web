import React, { useEffect, useState } from 'react';
import { isMobile as mobile } from 'react-device-detect';
import { H1, H5, TextS, TextXL } from '../../common/value/text';
import { Img, AimDiv, ImgDiv } from './component';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const BoxDiv = styled.div`
  position: absolute;
  top: 50px;
  left: 80px;
  z-index: 1;

  @media (max-width: 480px) {
    top: 54px;
    left: 30px;
  }
`;
export default function Aim({mobile}) {
  return (
      <div style={{position: 'relative'}}>
        <BoxDiv>
          <Fade bottom delay={500}>
            <Img
              src="/images/bg/_Box.png" 
              alt="_Box"
              width={mobile ? '318px' : '522px'}
            />
          </Fade>
        </BoxDiv>
        <ImgDiv src="/images/bg/BG02_WE-AIM-PC.png">
          <AimDiv>
            { mobile ?
              <H5>
                We aim to connect artists,<br />fans, and collectors through NFT. 
              </H5>:
              <H1>
                We aim to connect artists,<br />fans, and collectors through NFT.
              </H1>
            }
            {
              mobile ?
              <TextS margin='41px 0 0 0'>
                Corona is pulling the distance between the public and artists.<br />The public wants to enjoy artists' works, but they are often unable to attend exhibitions. Artists have to raise funds through exhibitions of their works, but opportunities are greatly reduced. In the NFT art market, people who aren't real artists are making money. Real artists do not know how to participate in the NFT art market. Our project aims to engage real artists in the NFT art market and bridge the public to owning and enjoying the works of artists they want. 
              </TextS>:
              <TextXL margin='50px 0 0 0'>
                Corona is pulling the distance between the public and artists.<br />The public wants to enjoy artists' works, but they are often unable to attend exhibitions. Artists have to raise funds through exhibitions of their works, but opportunities are greatly reduced. In the NFT art market, people who aren't real artists are making money. Real artists do not know how to participate in the NFT art market. Our project aims to engage real artists in the NFT art market and bridge the public to owning and enjoying the works of artists they want. 
              </TextXL>
            }
          </AimDiv>
        </ImgDiv>
      </div>
  );
}