import styled, { css } from 'styled-components';

export const RowDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : `space-between`};
  align-items: center;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const ReactiveDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : `space-between`};
  align-items: ${(props) => props.alignItems ? props.alignItems : `center`};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};

  @media (max-width: 480px) {
    flex-flow: column;
    width: 100%;
  }
`;

export const Img = styled.img`
  height: auto;
  width: ${(props) => props.width};
  object-fit: 'cover';
  display: display-inside;

  @media (max-width: 480px) {
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-flow: column;
  background-position: center;
  background-repeat:no-repeat;
  background-size: ${(props) => props.full ? 'cover' : '100% 100%'};
  background-color: #5454d4;
  background-image: ${(props) => `url(${props.src})`};

  @media (max-width: 480px) {

  }
`;

export const DiscordDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 107px 80px 104px;

  @media (max-width: 480px) {
    padding: 47px 32px 48px;
  }
`;

export const DiscordBtn = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  cursor: pointer;
  @media (max-width: 480px) {
    padding: 12px 32px;
  }
`;

export const RoadmapDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 72px 80px 102px;
  z-index: 2;
  @media (max-width: 480px) {
    padding: 42px 32px 63px;
  }
`;

export const PhaseDiv = styled.div`
  display: flex;
  flex-flow: column;
  margin: ${(props) => props.margin};
`;

export const PhaseBtn = styled.div`
  display: flex;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  padding: 9px 10px;

  @media (max-width: 480px) {
    padding: 4.5px 6px;
  }
`;

export const AimDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 72px 80px 157px 537px;
  z-index: 2;
  
  @media (max-width: 480px) {
    padding: 43px 32px 30px;
  }
`;

export const SloganDiv = styled.div`
  padding: 100px 95px;

  @media (max-width: 480px) {
    padding: 58px 0px 58px 32px;
  }
`;

export const QnaDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 72px 80px;
  background-color: #e5e5e5;

  @media (max-width: 480px) {
    padding: 42px 32px;
  }
`;

export const Cursor = styled.div`
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;