import styled from "styled-components";

const SelectBox = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
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
  padding-left: 9px;

  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 14px;
  color: #000;
`;

export default function Select({ list }) {
  return (
    <SelectBox>
      {list.map((item, idx) => (
        <option value={idx}>{item}</option>
      ))}
    </SelectBox>
  );
}
