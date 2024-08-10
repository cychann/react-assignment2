import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignupForm.styles';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // useRef로 이메일 입력 필드를 참조합니다.
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordConfirmInputRef = useRef(null);

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Password validation: 4 to 8 characters
    const passwordRegex = /^.{4,8}$/;
    setIsPasswordValid(passwordRegex.test(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
    setEmailTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!isEmailValid) {
      alert('이메일 주소가 올바르지 않습니다.');
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
      return;
    }

    // Password validation
    if (!isPasswordValid) {
      alert('비밀번호는 4자 이상 8자 이하로 입력해야 합니다.');
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      if (passwordConfirmInputRef.current) {
        passwordConfirmInputRef.current.focus();
      }
      return;
    }

    console.log('Form submitted');
    navigate('/');
  };

  return (
    <S.SignupFormContainer onSubmit={handleSignupSubmit}>
      <S.SignupGroup>
        <S.SignupLabel htmlFor="email">이메일</S.SignupLabel>
        <S.SignupInput
          id="email"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          isInvalid={!isEmailValid && emailTouched}
          ref={emailInputRef}
        />
      </S.SignupGroup>
      <S.SignupGroup>
        <S.SignupLabel htmlFor="password">비밀번호</S.SignupLabel>
        <S.SignupInput
          id="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          isInvalid={!isPasswordValid}
          ref={passwordInputRef}
        />
      </S.SignupGroup>
      <S.SignupGroup>
        <S.SignupLabel htmlFor="confirmPassword">비밀번호 확인</S.SignupLabel>
        <S.SignupInput
          id="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          ref={passwordConfirmInputRef}
        />
      </S.SignupGroup>
      <S.SignupGroup>
        <S.SignupLabel htmlFor="phone">연락처</S.SignupLabel>
        <S.SignupInput
          id="phone"
          type="text"
          placeholder="연락처"
          value={phone}
          onChange={handlePhoneChange}
        />
      </S.SignupGroup>

      <S.SignupSubmitBtn type="submit">회원가입</S.SignupSubmitBtn>
    </S.SignupFormContainer>
  );
}
