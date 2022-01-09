import React, { useEffect, useState } from 'react';
import { BtnLabelS, Description, FooterLabel, H1, H5, TextS, TextXL } from '../../common/value/text';
import { accent, black, iris, white } from '../../common/value/color';
import { Img, ImgDiv, PhaseBtn, PhaseDiv, RoadmapDiv, RowDiv } from './component';
import Fade from 'react-reveal/fade';
import styled from 'styled-components';

const LightDiv = styled.div`
  position: absolute;
  top: 76px;
  right: 8px;
  z-index: 1;

  @media (max-width: 480px) {
    top: 230px;
    right: -75px;
  }
`;

export default function Roadmap({mobile}) {
  return (
    <div style={{position: 'relative'}}>
      <LightDiv>
        <Fade bottom delay={500}>
          <Img
            src="/images/bg/flash-dynamic-gradient.png" 
            alt="flash-dynamic-gradient"
            width={mobile ? '373px' : '596px'}
          />
        </Fade>
      </LightDiv>

      <ImgDiv src="/images/bg/BG03_ROADMAP-PC.png">
          <RoadmapDiv>
            { mobile ?
              <H5 color={black}>
                ROADMAP
              </H5> :
              <H1 color={black}>
                ROADMAP
              </H1>
            }
            <PhaseDiv margin='42px 0 0 0'>
              <RowDiv justifyContent={'flex-start'} gap={mobile ? '10px' : '20px'}>
                <PhaseBtn backgroundColor={accent}>
                  { mobile ?
                    <Description color={white}>
                      PHASE 1
                    </Description> :
                    <BtnLabelS color={white}>
                      PHASE 1
                    </BtnLabelS>
                  }
                </PhaseBtn>
                <PhaseBtn backgroundColor={iris}>
                  { mobile ?
                    <Description color={white}>
                      2022 Q1
                    </Description> :
                    <BtnLabelS color={white}>
                      2022 Q1
                    </BtnLabelS>
                  }
                </PhaseBtn>
              </RowDiv>
              { mobile ?
                <TextS margin='12px 0 0 0'>
                  We will drop the NFTDAO Membership NFTs.
                </TextS> :
                <H5 margin='24px 0 0 0'>
                  We will drop the NFTDAO Membership NFTs.
                </H5>
              }
              { mobile ?
                <TextS margin='12px 0 0 0'>
                  On 1/1 (New Year's Day 2022), we will drop the NFTDAO Membership NFTs. These NFTs will allow for community access, governance, a wide variety of perks in the near term. 
                </TextS> :
                <TextXL margin='9px 0 0 0'>
                  On 1/1 (New Year's Day 2022), we will drop the NFTDAO Membership NFTs. These NFTs will allow for community access, governance, a wide variety of perks in the near term. 
                </TextXL>
              }
            </PhaseDiv>
            <PhaseDiv margin={mobile ? '32px 0 0 0' : '48px 0 0 0'}>
              <RowDiv justifyContent={'flex-start'} gap={mobile ? '10px' : '20px'}>
                <PhaseBtn backgroundColor={accent}>
                  { mobile ?
                    <Description color={white}>
                      PHASE 1
                    </Description> :
                    <BtnLabelS color={white}>
                      PHASE 1
                    </BtnLabelS>
                  }
                </PhaseBtn>
                <PhaseBtn backgroundColor={iris}>
                  { mobile ?
                    <Description color={white}>
                      2022 Q1
                    </Description> :
                    <BtnLabelS color={white}>
                      2022 Q1
                    </BtnLabelS>
                  }
                </PhaseBtn>
              </RowDiv>
              { mobile ?
                <TextS margin='24px 0 0 0'>
                  In early 2022, the NFTDAO community will organize into a DAO tasked with creating the club of our collective dreams and identifying the first course to acquire and create that experience.
                </TextS> :
                <TextXL margin='24px 0 0 0'>
                  In early 2022, the NFTDAO community will organize into a DAO tasked with creating the club of our collective dreams and identifying the first course to acquire and create that experience.
                </TextXL>
              }
            </PhaseDiv>
            <PhaseDiv margin={mobile ? '32px 0 0 0' : '48px 0 0 0'}>
              <RowDiv justifyContent={'flex-start'} gap={mobile ? '10px' : '20px'}>
                <PhaseBtn backgroundColor={accent}>
                  { mobile ?
                    <Description color={white}>
                      PHASE 1
                    </Description> :
                    <BtnLabelS color={white}>
                      PHASE 1
                    </BtnLabelS>
                  }
                </PhaseBtn>
                <PhaseBtn backgroundColor={iris}>
                  { mobile ?
                    <Description color={white}>
                      2022 Q1
                    </Description> :
                    <BtnLabelS color={white}>
                      2022 Q1
                    </BtnLabelS>
                  }
                </PhaseBtn>
              </RowDiv>
              { mobile ?
                <TextS margin='24px 0 0 0'>
                In mid-2022, the NFTDAO community will support the acquisition of one of the world's greatest golf courses.
  Know which course we should buy? Join the Discord and tell us.
                </TextS> :
                <TextXL margin='24px 0 0 0'>
                In mid-2022, the NFTDAO community will support the acquisition of one of the world's greatest golf courses.
  Know which course we should buy? Join the Discord and tell us.
                </TextXL>
              }
            </PhaseDiv>
          </RoadmapDiv>
        </ImgDiv>
      </div>
  );
}

