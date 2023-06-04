import styled from "styled-components";

export const SearchBox = styled.div`
  width: 70%;
  height: 60px;
  background-color: #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MypageBox = styled.div`
  width: 14%;
  height: 60px;
  background-color: #d34a4d;
  border-radius: 15px;
  margin-right: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 65%;
  height: 70%;
  margin-left: 5%;
  margin-right: 5%;
  outline: none;
  border: none;
  background-color: #eeee;

  font-size: 100%;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
`;

export const SearchList = styled.ul`
  position: absolute;
  top: 44px;
  width: 50%;
  padding: 0;

  background-color: #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const SearchItem = styled.li`
  width: 50%;
  height: 30px;

  margin-left: 7%;
  text-align: left;
  list-style: none;
  line-height: 30px;
`;

export const UserImg = styled.img`
  width: 40%;
  height: 40%;
`;

export const ListLogo = styled.img`
  width: 8%;
  height: 35%;
`;

export const SearchLogo = styled.img`
  width: 8%;
  height: 40%;
`;
