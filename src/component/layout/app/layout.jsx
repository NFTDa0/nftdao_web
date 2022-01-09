import Header from './header';
import Footer from './footer';
import styled from 'styled-components';
import Head from "next/head";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  width: 100%;

  @media all and (min-width: 800px) {
    /* width: 500px; */
  }
`;

const Layout = ({children, mobile}) => (
  <>
    <Head>
      <title>NFTDAO</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nftdao.cool" />
      <meta property="og:title" content="NftDAO.Cool" />
      <meta property="og:image" content="/NFTDAO_OG.png" />
      <meta property="og:description" content="NFTDAO is a creative DAO for artists, curators and collectors." />
      <meta property="og:site_name" content="Site Name" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
    <Body>
      {children}
      <Footer mobile={mobile}/>
    </Body>
  </>
)

export default Layout