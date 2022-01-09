import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';


const RootDiv = styled.div`
  display: flex;
  position: static;
  width: 100%;
`;

const TitleText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 20px auto;
  font-size: 20px;
  cursor: pointer;
`;

const ListItem = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #000000;
  text-decoration: none;
  width: 100%;
  flex: 1;
  min-height: 50px;
  height: auto;
  font-weight: 500;
  cursor: pointer;
`;

const HeaderDiv = styled.div`
  display: flex;
  position: relative;
  /* top: 0; */
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  color: #000000;
  border-bottom: 3px solid #ececec;
  z-index: 0;
`;

const TitleBtn = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color:#000000;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const ListContentDiv = styled.div`
  width: 100%;
`;

const ArrowDiv = styled.div`
  position: absolute;
  right: 30%;
  
`;

const InnerDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #000000;
  text-decoration: none;
  width: 100%;
  flex: 1;
  padding: 20px 0 30px 0;
  font-weight: 500;
`;

const InnerText = styled.p`
  font-size: 15px;
  margin: 10px 0 0 0;
  cursor: pointer;
`;

const RowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Btn = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;
  border: 1px solid #1f42ff;
  border-radius: 5px;
  height: 30px;
  background-color: #ffffff;
  font-size: 15px;
  color: #1f42ff;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 0;
  cursor: pointer;
  font-size: 14px;
`;

const SignOutBtn = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid #1f42ff;
  border-radius: 5px;
  height: 30px;
  background-color: #ffffff;
  font-size: 15px;
  color: #1f42ff;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  cursor: pointer;
  font-size: 14px;
`;

const NameText = styled.p`
  font-weight: bold;
  margin: 20px 0 0 0;
  /* font-size: 18px; */
`;

const A = styled.a`
  text-decoration: none;
  &:visited {
    color: #000000;
  }
  &:link {
    color: #000000;
  }
  &:active {
    color: #000000;
  }
`;

function Header() {
  const router = useRouter();
  const [isDrawer, setIsDrawer] = useState(false);
  const [innerVisible, setInnerVisible] = useState(false);

  const handleClick = () => {
    // router.push("/");
  }
  
  return (
    <RootDiv>
      <HeaderDiv>
        {/* <IconButton className="menu-button" color="inherit" aria-label="menu" onClick={() => setIsDrawer(true)}>
          <MenuIcon />
        </IconButton> */}
        <TitleBtn onClick={handleClick()}>
          유어퀵
        </TitleBtn>
      </HeaderDiv>
    </RootDiv>
  );
}

export default Header;