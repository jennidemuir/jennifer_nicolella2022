import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const themeColor = "#6666e3";

export const ContactWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: #5b3758; */
  background-color: #0e0e52;
  display: flex;
  flex-direction: column;

`;

export const HomeBtn = styled.nav`
  padding: 2rem;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

export const HomeBtnLink = styled(Link)`
  border-radius: 50px;
  /* background: #01bf7a; */
  background: ${themeColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const FormWrapper = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;


// export const ContactImg = styled.img`
//   position: absolute;
//   right: 50%;
//   top: 50%;
//   transform: translate(50%, -50%);
//   max-width: 1000px;
//   height: auto;
//   /* margin: 0 0 10px 0; */
//   padding-right: 0;
//   opacity: 0.75;
//   @media screen and (max-width: 1000px) {
//     max-width: 700px;
//   }
//   @media screen and (max-width: 480px) {
//     max-width: 500px;

//   }
// `;

export const ContactH1 = styled.h1`
  color: #f3f9f0;
  padding-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label``;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;

export const FormBtn = styled.button`
  width: 100%;
  background-color: ${themeColor};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(95%);
  }
`;
