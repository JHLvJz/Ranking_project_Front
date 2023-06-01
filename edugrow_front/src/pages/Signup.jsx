import "../styles/Signup.css";

/* 학교메일 인증: 인증 버튼 */

function Signup() {
  return (
    <div className="wrapper">
      <header>
        <h1>회원가입</h1>
        <h3 id="headerTitle">Let's start study</h3>
      </header>
      <div className="container">
        <form>
          <div className="BasicInfo">
            <hr />
            <h3>Basic Info</h3>
            <label for="id">아이디</label>
            <span className="box">
              <input type="text" className="withBtn" id="id" />
              <span className="setBtn">
                <span>중복확인</span>
              </span>
            </span>
            <label for="password">비밀번호</label>
            <span className="box">
              <input type="password" id="password" required />
            </span>
            <label for="name">닉네임</label>
            <span className="box">
              <input type="text" className="withBtn" id="name" />
              <span className="setBtn">
                <span>중복확인</span>
              </span>
            </span>
          </div>
          <div className="SchoolInfo">
            <hr />
            <h3>School Info</h3>
            <label for="mail">학교메일 인증*</label>
            <span className="box">
              <input type="text" className="withUrl" id="mail" />
              <span class="url">@korea.ac.kr</span>
            </span>
            <label for="college">단과대학</label>
            <span className="box">
              <input type="text" id="college" />
            </span>
            <label for="major">학과</label>
            <span className="box">
              <input type="text" className="withBtn" id="major" />
              <label for="showMajor" class="setBtn">
                <input type="checkbox" id="showMajor" />
                <span id="showMajorText">공개</span>
              </label>
            </span>
            <label for="subject">공부영역 (optional)</label>
            <span className="box">
              <input type="text" id="subject" />
            </span>
          </div>
          <div className="AddInfo">
            <hr />
            <h3>Additional Info</h3>
            <label for="phone">전화번호 (optional)</label>
            <span className="box">
              <input type="tel" id="phone" />
            </span>
            <label for="profile">
              프로필 사진 (optional)
              <span id="addFile">
                <hr class="line" />
                <hr class="line" id="line_vertical" />
              </span>
            </label>
            <input type="file" id="profile" accept="image/png, image/jpeg" />
          </div>
          <input type="submit" id="join" value="회원가입하기" />
        </form>
      </div>
      <footer></footer>
    </div>
  );
}

export default Signup;
