import { Input, InputBox, SetBtn, Join, AddFile } from "../styles/Signup";
import styled from "styled-components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  max-width: 768px;
  min-width: max-content;
`;

const Container = styled.div`
  position: relative;
  width: 313px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 80px;
  margin: 0 auto;
`;

const Title1 = styled.h1`
  margin-bottom: 0;
  width: 111px;
  height: 48px;

  font-family: "Mina Regular";
  font-weight: 400;
  font-size: 30px;

  color: #000;
`;

const Title3 = styled.h3`
  margin-top: 14;
  margin-bottom: 11;
  font-family: "Mina Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

const Header3 = styled(Title3)`
  margin: 0;
  height: 30px;
  color: #517a9a;
`;

const Url = styled.span`
  position: absolute;
  top: 13px;
  right: 15px;
  height: 16px;

  font-family: "Noto Sans Light";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #5c5c5c;
`;

const Message = styled.small`
  position: relative;
  display: block;
  top: 22px;

  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #d34a4d;
`;

const Hr = styled.hr`
  width: 100%;
  height: 0px;
  border: 2px solid #233554;
`;

const ShowDept = styled.input`
  box-sizing: border-box;
  position: absolute;
  display: block;

  width: 16px;
  height: 16px;
  left: 8px;
  top: 8px;
  margin: 0;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 100%;
  appearance: none;

  &:checked {
    background: #9c9c9c;
  }
`;

export const Label = styled.label`
  position: relative;
  margin-left: 10px;

  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

const Line = styled.hr`
  display: block;
  position: absolute;
  top: 52px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 0px;

  border: 3px solid #b1b1b1;
`;

const LineVert = styled(Line)`
  transform: translate(-50%, -50%) rotate(-90deg);
`;

/* 학교메일 인증: 인증 버튼 */

function Signup() {
  const [showDept, setShowDept] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange" });
  const baseUrl = "http://localhost:8080";

  const onSubmit = (data) => {
    const { id, password, name, mail, college, dept, subject, profileImg } =
      data;
    console.log(data);
    axios
      .post(baseUrl + "/api/members", {
        userId: id,
        email: mail,
        password: password,
        nickname: name,
        collegeName: college,
        departmentName: dept,
        memberInfoStatus: showDept ? "Y" : "N",
        profileMessage: subject,
        profileImage: profileImg,
        // * profileImage, memberInfoStatus
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.dir(error);
      });
    alert("가입이 완료되었습니다.");
  };

  const onCheckClick = () => {
    setShowDept((current) => !current);
    console.log(showDept);
  };

  return (
    <Wrapper>
      <Container>
        <header>
          <Title1>회원가입</Title1>
          <Header3>Let's start study</Header3>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="BasicInfo">
            <Hr />
            <Title3>Basic Info</Title3>
            <Label htmlFor="id">아이디</Label>
            <InputBox error={errors.id}>
              <Input
                type="text"
                size="Button"
                id="id"
                name="id"
                {...register("id", {
                  required: "아이디를 입력해 주세요.",
                  minLength: {
                    value: 2,
                    message: "2자 이상으로 작성해 주세요.",
                  },
                  maxLength: {
                    value: 10,
                    message: "10자 이하로 작성해 주세요.",
                  },
                })}
              />
              <SetBtn>
                <span>중복확인</span>
              </SetBtn>
              {errors.id && <Message role="alert">{errors.id.message}</Message>}
            </InputBox>
            <Label htmlFor="password">비밀번호</Label>
            <InputBox error={errors.password}>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="영어, 숫자, 특수문자를 포함, 공백 없이 4~16자"
                {...register("password", {
                  required: "비밀번호를 입력해 주세요.",
                  minLength: {
                    value: 4,
                    message: "4자 이상으로 작성해 주세요.",
                  },
                  maxLength: {
                    value: 16,
                    message: "16자 이하로 작성해 주세요.",
                  },
                  pattern: {
                    value:
                      /(?=.*[0-9])(?=.*[~`!@#$%^&*()-+=_?><.])(?=.*[a-zA-Z])/,
                    message: "영어, 숫자, 특수문자를 포함해 주세요.",
                  },
                })}
              />
              {errors.password && (
                <Message role="alert">{errors.password.message}</Message>
              )}
            </InputBox>
            <Label htmlFor="name">닉네임</Label>
            <InputBox error={errors.name}>
              <Input
                type="text"
                size="Button"
                id="name"
                name="name"
                {...register("name", {
                  required: "닉네임을 입력해 주세요.",
                })}
              />
              <SetBtn>
                <span>중복확인</span>
              </SetBtn>
              {errors.name && (
                <Message role="alert">{errors.name.message}</Message>
              )}
            </InputBox>
          </div>
          <div className="SchoolInfo">
            <Hr />
            <Title3>School Info</Title3>
            <Label htmlFor="mail">학교메일 인증*</Label>
            <InputBox error={errors.mail}>
              <Input
                type="text"
                size="Url"
                id="mail"
                name="mail"
                {...register("mail", {
                  required: "메일 주소를 입력해 주세요.",
                })}
              />
              <Url>@korea.ac.kr</Url>
              {errors.mail && (
                <Message role="alert">{errors.mail.message}</Message>
              )}
            </InputBox>
            <Label htmlFor="college">단과대학</Label>
            <InputBox error={errors.college}>
              <Input
                type="text"
                id="college"
                name="college"
                {...register("college")}
              />
              {errors.college && (
                <Message role="alert">{errors.college.message}</Message>
              )}
            </InputBox>
            <Label htmlFor="dept">학과</Label>
            <InputBox error={errors.dept}>
              <Input
                type="text"
                className="withBtn"
                id="dept"
                name="dept"
                {...register("dept")}
              />
              <SetBtn htmlFor="showDept">
                <ShowDept
                  type="checkbox"
                  id="showDept"
                  onClick={onCheckClick}
                  defaultChecked
                />
                <span style={{ width: 32, left: 26 }}>
                  {showDept ? "공개" : "비공개"}
                </span>
              </SetBtn>
              {errors.dept && (
                <Message role="alert">{errors.dept.message}</Message>
              )}
            </InputBox>
            <Label htmlFor="subject">공부영역 (optional)</Label>
            <InputBox>
              <Input
                type="text"
                id="subject"
                name="subject"
                {...register("subject")}
              />
            </InputBox>
          </div>
          <div className="AddInfo">
            <Hr />
            <Title3>Additional Info</Title3>
            <Label htmlFor="profile">
              프로필 사진 (optional)
              <AddFile>
                <Line />
                <LineVert />
              </AddFile>
            </Label>
            <Input
              type="file"
              id="profile"
              accept="image/png, image/jpeg"
              name="profileImg"
              {...register("profileImg")}
            />
          </div>
          <Join type="submit" value="회원가입하기" disabled={isSubmitting} />
        </form>
        <Footer></Footer>
      </Container>
    </Wrapper>
  );
}

export default Signup;
