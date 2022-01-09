import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Img, ImgDiv, SloganDiv } from './component';
import ScrollContainer from 'react-indiana-drag-scroll'
import styled from 'styled-components';

const ScrollDiv = styled.div`
  display: flex;
  padding: 0 100px 0 32px;
`;

export default function Slogan({mobile}) {
  return (
    <ImgDiv src={mobile ? '/images/bg/BG01_SLOGAN-PC.png' : '/images/bg/BG01_SLOGAN-PC.png'}>
      <SloganDiv>
        <ScrollContainer>
          <Img 
            src="/images/We enjoy art, love art, and create art.png" 
            alt="NFTDAO_LOGO"
            width={mobile ? '603px' : '100%'}
          />
        </ScrollContainer>
      </SloganDiv>
    </ImgDiv>
  );
}