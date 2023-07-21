import styled from "styled-components";
import GlobalFont from "../fonts/fonts";

const InputWidth = {
  Normal: "291px",
  Button: "214px",
  Url: "172px",
};

export const PageTitle1 = styled.h1`
  margin-bottom: 0;
  width: 111px;
  height: 48px;

  font-family: "Mina Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;

  color: #000;
`;

export const Input = styled.input`
  height: 30px;
  width: ${({ size }) => InputWidth[size] ?? InputWidth["Normal"]};
  padding: 0;

  border: none;
  appearance: none;
  background: none;
  outline: none;
  cursor: pointer;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export const InputBox = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;

  margin-top: 6px;
  margin-bottom: 31px;
  height: 49px;
  width: 313px;

  border: 2px solid #b1b1b1;
  border-radius: 10px;
  background: #ffffff;

  &:focus {
    border: 2px solid #517a9a;
  }
`;
