import styled from 'styled-components'

// const lightBgColor = "#f5efff";
// const darkBgColor = "#5b3758";
// const lightTxtColor = "#f3f9f0";
// const darkTxtColor = "#380036";
// const topLineColor = "#01BF71";
const lightBgColor = "#f5efff";
const darkBgColor = "#0e0e52";
const lightTxtColor = "#f3f9f0";
const darkTxtColor = "#380036";
// const topLineColor = "#bd93d8";
// const topLineColor = "#d9aef5";
const topLineDrkColor = "#6666e3";
const topLineLghtColor = "#6666e3";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? lightBgColor : darkBgColor)};

  @media screen and (max-width: 1000px) {
    padding: 2rem 0;
    max-height: 1100px;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
  /* display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center; */
  flex-direction: ${({ imgStart }) =>
    imgStart ? `row-reverse` : `row`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    /* grid-template-areas: "col2" "col1"; */

    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Column1 =styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    /* grid-area: col1; */
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  /* grid-area: col2; */
`

export const TextWrapper =styled.div`
    max-width: 700px;
    padding-top: 25px;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* display: block;
    margin-left: auto;
    margin-right: auto; */
    text-align: center;
`

export const TopLine = styled.p`
  color: ${({ lightBg }) => (lightBg ? topLineDrkColor : topLineLghtColor)};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding-bottom: 3rem;
  margin-bottom: 16px;
  @media screen and (max-width: 1000px) {
    padding-bottom: 1rem;
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600 ;
    color: ${({lightText}) => (lightText ? lightTxtColor : darkTxtColor)};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
  /* max-width: 600px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? darkTxtColor : lightTxtColor)};

  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  max-width: ${({ vertImage }) => (vertImage ? "300px" : "600px")};
  height: 100%;
  @media screen and (max-width: 1000px) {
    max-width: ${({ vertImage }) => (vertImage ? "135px" : "500px")};
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;