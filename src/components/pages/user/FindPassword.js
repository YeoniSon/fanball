import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginCard,
  LoginContainer,
  Logo,
  SignupLink as LoginLink,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputContainer,
  ErrorMessage,
  LoginButton,
} from "../../../styles/LoginPageStyled";

const FindPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (value) => /.+@.+\..+/.test(String(value).trim());

  const handleSendCode = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("유효한 이메일을 입력해주세요.");
      return;
    }
    try {
      setIsLoading(true);
      // const code = String(Math.floor(100000 + Math.random() * 900000));
      // setGeneratedCode(code);
      setGeneratedCode("123456");
      setStep(2);
    } catch (err) {
      setError("인증코드 전송 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setError("");
    if (!inputCode || inputCode.length < 6) {
      setError("6자리 인증코드를 입력해주세요.");
      return;
    }
    if (inputCode !== "123456") {
      setError("인증코드가 올바르지 않습니다.");
      return;
    }
    setStep(3);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    if (!password || password.length < 6) {
      setError("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      setIsLoading(true);
      alert("비밀번호가 변경되었습니다. 다시 로그인해주세요.");
      navigate("/login");
    } catch (err) {
      setError("비밀번호 변경 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginCard>
          <Logo onClick={() => navigate("/")}>
            <h1>⚾ FANBALL</h1>
            <p>팬들의 야구 커뮤니티</p>
          </Logo>
          <Form
            onSubmit={
              step === 1
                ? handleSendCode
                : step === 2
                ? handleVerifyCode
                : handleResetPassword
            }
          >
            {step === 1 && (
              <>
                <FormGroup>
                  <Label htmlFor="email">이메일</Label>
                  <InputContainer>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="가입한 이메일을 입력하세요"
                    />
                  </InputContainer>
                </FormGroup>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <LoginButton type="submit" disabled={isLoading}>
                  {isLoading ? "전송 중..." : "인증코드 전송"}
                </LoginButton>
              </>
            )}

            {step === 2 && (
              <>
                <FormGroup>
                  <Label htmlFor="code">인증코드</Label>
                  <InputContainer>
                    <Input
                      id="code"
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      placeholder="이메일로 받은 6자리 코드를 입력하세요"
                    />
                  </InputContainer>
                </FormGroup>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <LoginButton type="submit" disabled={isLoading}>
                    인증하기
                  </LoginButton>
                  <LoginButton
                    type="button"
                    onClick={(e) => handleSendCode(e)}
                    disabled={isLoading}
                    style={{ background: "#6b7280" }}
                  >
                    코드 다시 보내기
                  </LoginButton>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <FormGroup>
                  <Label htmlFor="password">새 비밀번호</Label>
                  <InputContainer>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="새 비밀번호를 입력하세요"
                    />
                  </InputContainer>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
                  <InputContainer>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="새 비밀번호를 다시 입력하세요"
                    />
                  </InputContainer>
                </FormGroup>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <LoginButton type="submit" disabled={isLoading}>
                  {isLoading ? "변경 중..." : "비밀번호 변경"}
                </LoginButton>
              </>
            )}
          </Form>
          <LoginLink>
            계정이 기억나셨나요?{" "}
            <Button type="button" onClick={() => navigate("/login")}>
              로그인
            </Button>
          </LoginLink>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default FindPassword;
