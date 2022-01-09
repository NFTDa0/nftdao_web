import Layout from "../component/layout/app/layout";
import Slogan from "../component/layout/home/slogan";
import Aim from "../component/layout/home/aim";
import Roadmap from "../component/layout/home/roadmap";
import Qna from "../component/layout/home/qna";
import Discord from "../component/layout/home/discord";
import Header from "../component/layout/home/header";
import Warning from "../component/layout/app/warning";
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
