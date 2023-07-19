import { PageTitle1, Input, InputBox } from "../styles/Signup";
import styled from "styled-components";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Label = styled.label`
  position: relative;
  margin-left: 10px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

/* 학교메일 인증: 인증 버튼 */

function Signup() {
  const { register, handleSubmit, errors } = useForm();
  const baseUrl = "http://localhost:8080";

  const onSubmit = (data) => {
    const { id, password, name, mail, college, dept, subject, profileImg } =
      data;
    axios
      .post(baseUrl, {
        id,
        password,
        name,
        mail,
        college,
        dept,
        subject,
        profileImg,
      })
      .catch((error) => {
        console.dir(error);
      });
  };

  return (
    <div className="wrapper">
      <header>
        <PageTitle1>회원가입</PageTitle1>
        <h3 id="headerTitle">Let's start study</h3>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="BasicInfo">
            <hr />
            <h3>Basic Info</h3>
            <Label for="id">아이디</Label>
            <InputBox>
              <Input
                type="text"
                size="Button"
                id="id"
                name="id"
                {...register("id")}
              />
              <span className="setBtn">
                <span>중복확인</span>
              </span>
            </InputBox>
            <label for="password">비밀번호</label>
            <span className="box">
              <Input
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: "비밀번호를 입력해 주세요.",
                })}
              />
            </span>
            <label for="name">닉네임</label>
            <InputBox>
              <Input
                type="text"
                size="Button"
                id="name"
                name="name"
                {...register("name")}
              />
              <span className="setBtn">
                <span>중복확인</span>
              </span>
            </InputBox>
          </div>
          <div className="SchoolInfo">
            <hr />
            <h3>School Info</h3>
            <label for="mail">학교메일 인증*</label>
            <InputBox>
              <Input
                type="text"
                size="Url"
                id="mail"
                name="mail"
                {...register("mail")}
              />
              <span class="url">@korea.ac.kr</span>
            </InputBox>
            <label for="college">단과대학</label>
            <span className="box">
              <Input
                type="text"
                id="college"
                name="college"
                {...register("college")}
              />
            </span>
            <label for="dept">학과</label>
            <InputBox>
              <Input
                type="text"
                className="withBtn"
                id="dept"
                name="dept"
                {...register("dept")}
              />
              <label for="showMajor" class="setBtn">
                <input type="checkbox" id="showMajor" />
                <span id="showMajorText">공개</span>
              </label>
            </InputBox>
            <label for="subject">공부영역 (optional)</label>
            <span className="box">
              <Input
                type="text"
                id="subject"
                name="subject"
                {...register("subject")}
              />
            </span>
          </div>
          <div className="AddInfo">
            <hr />
            <h3>Additional Info</h3>
            <label for="profile">
              프로필 사진 (optional)
              <span id="addFile">
                <hr class="line" />
                <hr class="line" id="line_vertical" />
              </span>
            </label>
            <Input
              type="file"
              id="profile"
              accept="image/png, image/jpeg"
              name="profileImg"
              {...register("profileImg")}
            />
          </div>
          <input type="submit" id="join" value="회원가입하기" />
        </form>
      </div>
      <footer></footer>
    </div>
  );
}

export default Signup;
