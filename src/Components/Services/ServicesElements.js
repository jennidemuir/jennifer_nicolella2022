import styled from "styled-components";
import { Link } from "react-router-dom";

const bgColor = "#0e0e52";
const txtColor = "#380036";
const btnColor = "#6666e3";
const btnTxtColor = "#0e0e52";
const btnHoverColor = "#f5efff";

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;
  background: ${bgColor};
  /* color: ${txtColor}; */

  @media screen and (max-width: 1000px) {
    height: 1100px;
    padding: 0;

  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;


  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  max-height: 500px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {

    padding: .75rem;
  }
`;

export const ServicesIcon = styled.img`
  height: auto;
  max-width: 75px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  color: #f3f9f0;
  text-align: center;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`

  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesDiv = styled.div`
max-width: 500px;
  font-size: 1rem;
  text-align: center;
`;

export const ContactBtn = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const ContactBtnLink = styled(Link)`
  border-radius: 50px;
  background: ${btnColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${btnTxtColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${btnHoverColor};

  }
`;