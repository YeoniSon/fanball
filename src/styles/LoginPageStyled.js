import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

export const LoginCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 3rem;
  width: 100%;
  max-width: 400px;
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #1e40af;
    margin: 0;
    font-weight: bold;
  }

  p {
    color: #6b7280;
    margin: 0.5rem 0 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
`;

export const InputContainer = styled.div`
  position: relative;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:focus-within {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &.error {
    border-color: #ef4444;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  outline: none;
  padding: 0.75rem;
  padding-right: 40px; /* 공간 확보: 토글 아이콘 */
  border: none;
  font-size: 1rem;
  transition: border-color 0.2s;
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const LoginButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

export const SignupLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #6b7280;

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TestAccounts = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 0.875rem;
    color: #374151;
  }

  .account {
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #374151;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const FindPasswordLink = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  align-self: flex-end;
  padding: 0;

  &:hover {
    color: #1d4ed8;
  }
`;
