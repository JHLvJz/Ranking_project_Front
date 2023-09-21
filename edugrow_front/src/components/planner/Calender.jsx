import { useEffect, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 87px;
  line-height: 87px;
  background-color: #d34a4d;
  align-items: center;
  justify-content: space-evenly;
`;

const Btn = styled.button`
  border: none;
  ${({ disabled }) => disabled && "visibility: hidden;"}
  background-color: transparent;
  cursor: pointer;
`;

const Img = styled.img`
  ${({ disabled }) => disabled && "visibility: hidden;"}

  width: 10px;
  height: auto;
`;

const Title = styled.h1`
  margin: 0%;
  font-family: "Nexon Football Gothic L";
  font-size: 28px;
  color: white;
`;

const Text = styled.span`
  font-size: 15px;
  font-family: "Inter Regular";
  font-weight: 400;
  color: white;
`;

const CustomDatePicker = styled(DatePicker)`
  margin-top: 1.5rem;
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
`;

export default function Calender({ day, setDay }) {
  const [isToday, setIsToday] = useState(true);
  const tom = new Date();

  useEffect(() => {
    const today = new Date();
    tom.setDate(today.getDate() + 1);
  }, []);

  useEffect(() => {
    const today = new Date();
    const nextDay = new Date();
    nextDay.setDate(day.date.getDate() + 1);
    if (nextDay > today) setIsToday(true);
    else setIsToday(false);
  }, [day]);

  function handleMinus() {
    setDay((prev) => {
      const newDate = prev.date;
      newDate.setDate(prev.date.getDate() - 1);
      return { date: newDate };
    });
  }

  function handlePlus() {
    setDay((prev) => {
      const newDate = prev.date;
      newDate.setDate(prev.date.getDate() + 1);
      return { date: newDate };
    });
  }

  const CustomDate = forwardRef(({ value, onClick }, ref) => (
    <Text onClick={onClick} ref={ref}>
      {value}
    </Text>
  ));

  return (
    <Wrapper>
      <Title>스터디 플래너</Title>
      <Btn onClick={handleMinus}>
        <Img src="/img/left.png" />
      </Btn>
      <DatePicker
        selected={day.date}
        onChange={(d) => setDay({ date: d })}
        customInput={<CustomDate />}
        dateFormat="yyyy년 M월 d일"
        todayButton="오늘"
        maxDate={tom}
      />
      <Btn onClick={handlePlus} disabled={isToday}>
        <Img src="/img/right.png" disabled={isToday} />
      </Btn>
    </Wrapper>
  );
}
