import Layout from "../component/layout/app/layout";
import styled, { css } from 'styled-components';
import { BtnLabelL, BtnLabelS, DiscordBtnLabel, DiscordDescription, H1, Headline1, MiniButtonLabel, TextL, TextXL, Typography } from "../component/common/value/text";
import { accent, black, iris, white } from "../component/common/value/color";
import QnaCard from "../component/layout/home/qna_card";
import Slogan from "../component/layout/home/Slogan";
import Aim from "../component/layout/home/Aim";
import Roadmap from "../component/layout/home/roadmap";
import { ImgDiv } from "../component/layout/home/component";
import Qna from "../component/layout/home/qna";
import Discord from "../component/layout/home/discord";
import Header from "../component/layout/home/header";
import Warning from "../component/layout/app/warning";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import MobileDetect from "mobile-detect";

export default function Home({mobile}) {
  return (    
    <Layout mobile={mobile}>
      <Warning mobile={mobile}/>
      <Header mobile={mobile}/>
      <Slogan mobile={mobile}/>
      <Aim mobile={mobile}/>
      <Roadmap mobile={mobile}/>
      <Qna mobile={mobile}/>
      <Discord mobile={mobile}/>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  let mobile;
  if (ctx.req) {
    const md = new MobileDetect(ctx.req.headers["user-agent"]);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }
  return { mobile: mobile };
};
