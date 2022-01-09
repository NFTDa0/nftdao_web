import React, { useEffect, useState } from 'react';
import { BtnLabelL, BtnLabelS, FooterLabel, H5, H7, TextL, TextS, TextXL, Typography } from '../../common/value/text';
import { black, white } from '../../common/value/color';
import { DiscordBtn, DiscordDiv, Img, ImgDiv, ReactiveDiv, RowDiv } from './component';
import Link from 'next/link';

export default function Discord({mobile}) {
  return (
    <ImgDiv src="/images/bg/BG04_JOIN-DISCORD-PC.png" full={true}>
        <DiscordDiv>
          <ReactiveDiv gap='22px' justifyContent='flex-start' alignItems={mobile ? 'flex-start' : ''}>
            { mobile ?
              <H5 color={white}>JOIN THE PLAYGROUND</H5> :
              <Typography color={white}>JOIN THE PLAYGROUND</Typography>
            }
            <Img
              src="/icons/Discord - Negative.png" 
              alt="Discord - Negative"
              width={mobile ? '48px' : '45px'}
            />
          </ReactiveDiv>
          <ReactiveDiv gap={mobile ? '24px' : '70px'} margin={'25px 0 0 0'} alignItems={mobile ? 'flex-end' : ''}>
            { mobile ?
              <TextS  color={white}>
                Our Discord community is filled with golfers and leisure enthusiasts of all skill levels - from tour professionals to weekend warriors to friends brand-new to golf! The Discord will be your portal to DAO activity. And you can share your gear, stories and arrange tee times, and more with other community members.  
              </TextS> :
              <H7  color={white}>
                Our Discord community is filled with golfers and leisure enthusiasts of all skill levels - from tour professionals to weekend warriors to friends brand-new to golf! The Discord will be your portal to DAO activity. And you can share your gear, stories and arrange tee times, and more with other community members.  
              </H7>
            }
            <DiscordBtn>
              <Link href='https://twitter.com/NftdaoCool' >
                <a target="_blank" style={{ textDecoration: 'none' }}>
                  { mobile ?
                    <BtnLabelS color={black}>
                      JOIN OUR DISCORD
                    </BtnLabelS>:
                    <BtnLabelL color={black}>
                      JOIN OUR DISCORD
                    </BtnLabelL>
                  }
                </a>
              </Link>
            </DiscordBtn>
          </ReactiveDiv>
        </DiscordDiv>
      </ImgDiv>
  );
}