import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginCard,
  Logo,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  LoginButton,
  SignupLink,
} from "../../../styles/LoginPageStyled";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // JSON 파일에서 사용자/관리자 데이터 동시 로드
  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const [usersRes, adminsRes] = await Promise.all([
          fetch("/mockUsers.json"),
          fetch("/mockAdmin.json"),
        ]);
        const usersData = await usersRes.json();
        const adminsData = await adminsRes.json();
        const userList = Array.isArray(usersData?.users) ? usersData.users : [];
        const adminList = Array.isArray(adminsData?.admins)
          ? adminsData.admins
          : [];
        setUsers([...userList, ...adminList]);
      } catch (error) {
        console.error("계정 데이터 로드 실패:", error);
      }
    };

    loadAccounts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // 입력값 검증
      if (!email || !password) {
        setError("이메일과 비밀번호를 모두 입력해주세요.");
        return;
      }

      // 목업 사용자/관리자 데이터에서 로그인 확인 (대소문자/공백 정규화, 키 차이 허용)
      const normalizedEmail = String(email).trim().toLowerCase();
      const normalizedPassword = String(password);
      const pickEmail = (u) =>
        String(u?.email ?? u?.adminEmail ?? "")
          .trim()
          .toLowerCase();
      const pickPassword = (u) => String(u?.password ?? u?.adminPassword ?? "");
      const user = users.find(
        (u) =>
          pickEmail(u) === normalizedEmail &&
          pickPassword(u) === normalizedPassword
      );

      if (user) {
        // 로그인 성공
        console.log("로그인 성공:", user);

        // 로컬 스토리지에 사용자 정보 저장
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        // 홈페이지로 이동
        navigate("/");

        // 페이지 새로고침으로 상태 업데이트
        window.location.reload();
      } else {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (error) {
      setError("로그인 중 오류가 발생했습니다.");
      console.error("로그인 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo onClick={() => navigate("/")}>
          <h1>⚾ FANBALL</h1>
          <p>팬들의 야구 커뮤니티</p>
        </Logo>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              className={error && !email ? "error" : ""}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className={error && !password ? "error" : ""}
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </LoginButton>
        </Form>

        <SignupLink>
          계정이 없으신가요?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "inherit",
              fontFamily: "inherit",
            }}
          >
            회원가입
          </button>
        </SignupLink>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
