import styled from 'styled-components';

export const Typography = styled.p`
  color: ${(props) => props.color};
  font-size: 48px;  
  line-height: 61.25px;
  font-weight: 700;
`;

export const Headline1 = styled.p`
  color: ${(props) => props.color};
  font-size: 40px;  
  line-height: 60px;
  font-weight: 700;
`;

export const Headline2 = styled.p`
  color: ${(props) => props.color};
  font-size: 32px;  
  line-height: 39px;
  font-weight: 800;
`;

export const Headline3 = styled.p`
  color: ${(props) => props.color};
  font-size: 28px;  
  line-height: 34px;
  font-weight: 700;
`;

export const Headline4 = styled.p`
  color: ${(props) => props.color};
  font-size: 28px;  
  line-height: 34px;
  font-weight: 600;
`;

export const Headline5 = styled.p`
  color: ${(props) => props.color};
  font-size: 24px;  
  line-height: 30px;
  font-weight: 700;
`;

export const Headline6 = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;  
  line-height: 18px;
  font-weight: 600;
`;

export const Headline7 = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;  
  line-height: 22px;
  font-weight: 700;
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;  
  line-height: 16px;
  font-weight: 400;
`;

export const TextBold = styled.p`
  color: ${(props) => props.color};
  font-size: 14;  
  line-height: 16;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;  
  line-height: 16px;
  font-weight: 500;
`;

export const SubtitleSemiBold = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;  
  line-height: 20px;
  font-weight: 600;
`;

export const BtnLabelL = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;  
  line-height: 26px;
  font-weight: 700;
  white-space:nowrap;

`;

export const BtnLabelM = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;  
  line-height: 20px;
  font-weight: 700;
  white-space:nowrap;

`;

export const BtnLabelS = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;  
  line-height: 18px;
  font-weight: 700;
  white-space:nowrap;

`;

export const TextXL = styled.p`
  color: ${(props) => props.color};
  font-size: 24px;  
  line-height: 31px;
  font-weight: 500;
  margin: ${(props) => props.margin};

`;

export const TextL = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;  
  line-height: 20px;
  font-weight: 500;
  margin: ${(props) => props.margin};
  text-align: center;
`;

export const TextM = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;  
  line-height: 16px;
  font-weight: 500;
  margin: ${(props) => props.margin};
  white-space: normal;
`;

export const TextS = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;  
  line-height: 18px;
  font-weight: 500;
  margin: ${(props) => props.margin};

`;

export const Description = styled.p`
  color: ${(props) => props.color};
  font-size: 12px;  
  font-weight: 500;
  margin: ${(props) => props.margin};
  white-space: ${(props) => props.whiteSpace ? props.hiteSpace : 'normal'};
`;

export const MiniDescription = styled.p`
  color: ${(props) => props.color};
  font-size: 9px;  
  line-height: 11px;
  font-weight: 400;
`;

export const H1 = styled.p`
  color: ${(props) => props.color};
  font-size: 48px;  
  line-height: 60px;
  font-weight: 700;
  margin: ${(props) => props.margin};
`;

export const H5 = styled.p`
  color: ${(props) => props.color};
  font-size: 24px;  
  line-height: 31px;
  font-weight: 700;
  margin: ${(props) => props.margin};

`;

export const H7 = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;  
  line-height: 20px;
  font-weight: 500;
`;

export const DiscordDescription = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;  
  line-height: 22.97px;
  margin: ${(props) => props.margin};
  font-weight: 400;
`;

export const DiscordBtnLabel = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;  
  height: 25.52px;
  font-weight: 700;
  white-space:nowrap;
`;

export const FooterLabel = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;  
  height: 20px;
  font-weight: 500;
`;