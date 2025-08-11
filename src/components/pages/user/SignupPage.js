import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignupContainer,
  SignupCard,
  Logo,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  SuccessMessage,
  SignupButton,
  LoginLink,
  Row,
} from "../../../styles/signup/SignupPageStyled";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    nickname: "",
    favoriteTeam: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const teams = [
    "두산 베어스",
    "LG 트윈스",
    "SSG 랜더스",
    "KT 위즈",
    "키움 히어로즈",
    "한화 이글스",
    "롯데 자이언츠",
    "삼성 라이온즈",
    "KIA 타이거즈",
    "NC 다이노스",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 에러 메시지 클리어
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 이메일 검증
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    // 비밀번호 검증
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (formData.password.length < 6) {
      newErrors.password = "비밀번호는 최소 6자 이상이어야 합니다.";
    }

    // 비밀번호 확인 검증
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    // 이름 검증
    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요.";
    }

    // 닉네임 검증
    if (!formData.nickname) {
      newErrors.nickname = "닉네임을 입력해주세요.";
    }

    // 좋아하는 팀 검증
    if (!formData.favoriteTeam) {
      newErrors.favoriteTeam = "좋아하는 팀을 선택해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSuccessMessage("");

    try {
      // 실제 회원가입 API 호출 대신 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 성공 메시지 표시
      setSuccessMessage(
        "회원가입이 완료되었습니다! 로그인 페이지로 이동합니다."
      );

      // 2초 후 로그인 페이지로 이동
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrors({ submit: "회원가입 중 오류가 발생했습니다." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignupContainer>
      <SignupCard>
        <Logo>
          <h1>⚾ FANBALL</h1>
          <p>회원가입</p>
        </Logo>

        <Form onSubmit={handleSubmit}>
          <Row>
            <FormGroup>
              <Label htmlFor="name">이름 *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력하세요"
                className={errors.name ? "error" : ""}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="nickname">닉네임 *</Label>
              <Input
                id="nickname"
                name="nickname"
                type="text"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="닉네임을 입력하세요"
                className={errors.nickname ? "error" : ""}
              />
              {errors.nickname && (
                <ErrorMessage>{errors.nickname}</ErrorMessage>
              )}
            </FormGroup>
          </Row>

          <FormGroup>
            <Label htmlFor="email">이메일 *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <Row>
            <FormGroup>
              <Label htmlFor="password">비밀번호 *</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력하세요"
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">비밀번호 확인 *</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="비밀번호를 다시 입력하세요"
                className={errors.confirmPassword ? "error" : ""}
              />
              {errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
              )}
            </FormGroup>
          </Row>

          <FormGroup>
            <Label htmlFor="favoriteTeam">좋아하는 팀 *</Label>
            <Select
              id="favoriteTeam"
              name="favoriteTeam"
              value={formData.favoriteTeam}
              onChange={handleChange}
              className={errors.favoriteTeam ? "error" : ""}
            >
              <option value="">팀을 선택하세요</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </Select>
            {errors.favoriteTeam && (
              <ErrorMessage>{errors.favoriteTeam}</ErrorMessage>
            )}
          </FormGroup>

          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

          <SignupButton type="submit" disabled={isLoading}>
            {isLoading ? "회원가입 중..." : "회원가입"}
          </SignupButton>
        </Form>

        <LoginLink>
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </LoginLink>
      </SignupCard>
    </SignupContainer>
  );
};

export default SignupPage;
