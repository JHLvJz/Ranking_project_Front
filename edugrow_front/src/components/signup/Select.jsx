import styled from "styled-components";

const SelectBox = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  display: block;
  border: none;
  position: relative;
  box-sizing: border-box;

  position: relative;
  top: 8px;
  left: 9px;
  height: 30px;
  width: ${({ button }) => (button ? "214px" : "291px")};

  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export default function Select({ list, button }) {
  return (
    <SelectBox button={button}>
      {list.map((item, idx) => (
        <option value={idx}>{item}</option>
      ))}
    </SelectBox>
  );
}
