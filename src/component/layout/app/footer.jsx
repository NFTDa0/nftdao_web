import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { Description, FooterLabel, H7 } from '../../common/value/text';
import { white } from '../../common/value/color';
import { isMobile as mobile } from 'react-device-detect';
import { Cursor, ReactiveDiv, RowDiv } from '../home/component';
import Link from 'next/link';

const RootDiv = styled.div`
  display: flex;
  flex-flow: column;
  background-color: black;
  padding: 48px 80px 48px 60px;
  gap: 18px;

  @media (max-width: 480px) {
    padding: 24px 24px 42px 24px;
  }
`;

const Img = styled.img`
  height: auto;
  width: ${(props) => props.width};
  object-fit: 'cover';
  display: display-inside;
`;

export default function Footer({mobile}) {
  const router = useRouter();

  return (
    <RootDiv>
      <ReactiveDiv gap={mobile ? '43px' : '0'} alignItems={mobile ? 'flex-start' : ''}>
        <Img 
          src="/images/NFTDAO_LOGO.png" 
          alt="NFTDAO_LOGO"
          width={mobile ? '192px' : '288px'}
        />
        <ReactiveDiv alignItems={mobile ? 'flex-end' : ''}>
          <RowDiv gap='20px'>
            <Cursor>
              <Link href='https://twitter.com/NftdaoCool'>
                <a target="_blank">
                  <Img 
                    src="/icons/Twitter - Negative.png" 
                    alt="NFTDAO_LOGO"
                    width='22px'
                  />
                </a>
              </Link>
            </Cursor>
            <Cursor>
              <Link href='https://www.instagram.com/nftdaocool/'>
                <a target="_blank">
                  <Img 
                    src="/icons/Instagram - Negative.png" 
                    alt="NFTDAO_LOGO"
                    width='22px'
                  />
                </a>
              </Link>
            </Cursor>
          </RowDiv>
        </ReactiveDiv>
      </ReactiveDiv>
      <RowDiv>
        { mobile 
          ? <Description color={white}>
              © 2022 nftdao
            </Description>
          : <H7 color={white} >
              © 2022 nftdao
            </H7>
        }
        <RowDiv gap='20px'>
          <Cursor>
            <Link href='https://twitter.com/NftdaoCool'>
              <a target="_blank">
                { mobile 
                  ? <Description color={white}>
                      Twitter
                    </Description>
                  : <H7 color={white} >
                      Twitter
                    </H7>
                }
              </a>
            </Link>
          </Cursor>
          <Cursor>
            <Link href='https://twitter.com/NftdaoCool'>
              <a target="_blank">
                { mobile 
                  ? <Description color={white}>
                      Discord
                    </Description>
                  : <H7 color={white} >
                      Discord
                    </H7>
                }
              </a>
            </Link>
          </Cursor>
          <Cursor>
            <Link href='/terms'>
              <a target="_blank">
                { mobile 
                  ? <Description color={white}>
                      Terms of Sale
                    </Description>
                  : <H7 color={white} >
                      Terms of Sale
                    </H7>
                }
              </a>
            </Link>
          </Cursor>
        </RowDiv>
      </RowDiv>
    </RootDiv>
  );
}