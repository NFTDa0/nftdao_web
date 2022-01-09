import React, { useEffect, useState } from 'react';
import { FooterLabel, H1, H5, TextXL } from '../../common/value/text';
import { QnaDiv } from './component';
import QnaCard from './qna_card';


export default function Qna({mobile}) {
  return (
    <QnaDiv>
      { mobile ?
        <H5 margin='0 0 38px 0'>
          Frequently Asked<br />Questions
        </H5>:
        <H1 margin='0 0 50px 0'>
          Frequently Asked Questions
        </H1>
      }
      <QnaCard
        mobile={mobile}
        question="Wouldn't holders get less airdrop when NFT pass gets sold more and more?"
        answer="Our bargaining power against projects grows bigger as the holder grows. We'll get better deal with high quallity and more allocations. Holder benefits will grows as the community grows."
      />
      <QnaCard
        mobile={mobile}
        question="Wouldn't holders get less airdrop when NFT pass gets sold more and more?"
        answer="Our bargaining power against projects grows bigger as the holder grows. We'll get better deal with high quallity and more allocations. Holder benefits will grows as the community grows."
      />
      <QnaCard
        mobile={mobile}
        question="Wouldn't holders get less airdrop when NFT pass gets sold more and more?"
        answer="Our bargaining power against projects grows bigger as the holder grows. We'll get better deal with high quallity and more allocations. Holder benefits will grows as the community grows."
      />
      <QnaCard
        mobile={mobile}
        question="Wouldn't holders get less airdrop when NFT pass gets sold more and more?"
        answer="Our bargaining power against projects grows bigger as the holder grows. We'll get better deal with high quallity and more allocations. Holder benefits will grows as the community grows."
      />
    </QnaDiv>
  );
}