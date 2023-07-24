import styled from "styled-components";

const InputWidth = {
  Normal: "291px",
  Button: "214px",
  Url: "185px",
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
  position: relative;
  top: 8px;
  left: 9px;
  height: 30px;
  width: ${({ size }) => InputWidth[size] ?? InputWidth["Normal"]};
  padding: 0;

  border: none;
  appearance: none;
  background: none;
  outline: none;
  cursor: text;

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

  border: 2px solid ${({ error }) => (error ? "#d34a4d" : "#b1b1b1")};
  border-radius: 10px;
  background: #ffffff;

  &:focus-within {
    border-color: ${({ error }) => (error ? "#d34a4d" : "#517a9a")};
  }
`;

export const SetBtn = styled.label`
  position: absolute;
  display: block;
  width: 65px;
  height: 30px;
  right: 9px;
  top: 8px;

  background-color: #d34a4d;
  border-radius: 15px;
  cursor: pointer;

  & > span {
    position: relative;
    display: block;
    width: 65px;
    height: 30px;
    line-height: 30px;

    font-family: "Noto Sans Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #ffffff;
  }
`;

export const Join = styled.input`
  position: relative;
  margin: 33px auto;

  width: 313px;
  height: 58px;
  border: none;
  border-radius: 10px;
  background: #517a9a;

  font-weight: 400;
  font-size: 15;
  color: white;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  cursor: pointer;

  &:disabled {
    background: #b1b1b1;
  }
`;

export const AddFile = styled.span`
  display: block;
  position: relative;
  box-sizing: border-box;
  margin-top: 15px;

  width: 125px;
  height: 125px;

  background: #ffffff;
  border: 2px solid #b1b1b1;
  border-radius: 15px;

  cursor: pointer;
`;
