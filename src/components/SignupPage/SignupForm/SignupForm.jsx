import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignupForm.styles';
import { useField } from 'hooks/useField';

export default function SignupForm() {
  const navigate = useNavigate();

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePassword = (value) => /^.{4,8}$/.test(value);

  const emailField = useField('', validateEmail, { validateOnBlur: true });
  const passwordField = useField('', validatePassword, {
    validateOnChange: true,
  });
  const confirmPasswordField = useField('');
  const phoneField = useField('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!emailField.isValid) {
      alert('이메일 주소가 올바르지 않습니다.');
      emailField.ref.current.focus();
      return;
    }

    if (!passwordField.isValid) {
      alert('비밀번호는 4자 이상 8자 이하로 입력해야 합니다.');
      passwordField.ref.current.focus();
      return;
    }

    if (passwordField.value !== confirmPasswordField.value) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      confirmPasswordField.ref.current.focus();
      return;
    }

    navigate('/');
  };

  useEffect(() => {
    console.log(passwordField.value);
    console.log(passwordField.isValid);
  }, [passwordField]);

  return (
    <S.SignupFormLayout>
      <S.SignupFormContainer onSubmit={handleSignupSubmit}>
        <S.SignupGroup>
          <S.SignupLabel htmlFor="email">이메일</S.SignupLabel>
          <S.SignupInput
            id="email"
            type="text"
            placeholder="이메일"
            value={emailField.value}
            onChange={emailField.onChange}
            onBlur={emailField.onBlur}
            isInvalid={!emailField.isValid}
            ref={emailField.ref}
          />
        </S.SignupGroup>
        <S.SignupGroup>
          <S.SignupLabel htmlFor="password">비밀번호</S.SignupLabel>
          <S.SignupInput
            id="password"
            type="password"
            placeholder="비밀번호"
            value={passwordField.value}
            onChange={passwordField.onChange}
            isInvalid={!passwordField.isValid}
            ref={passwordField.ref}
          />
        </S.SignupGroup>
        <S.SignupGroup>
          <S.SignupLabel htmlFor="confirmPassword">비밀번호 확인</S.SignupLabel>
          <S.SignupInput
            id="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPasswordField.value}
            onChange={confirmPasswordField.onChange}
            ref={confirmPasswordField.ref}
          />
        </S.SignupGroup>
        <S.SignupGroup>
          <S.SignupLabel htmlFor="phone">연락처</S.SignupLabel>
          <S.SignupInput
            id="phone"
            type="text"
            placeholder="연락처"
            value={phoneField.value}
            onChange={phoneField.onChange}
          />
        </S.SignupGroup>

        <S.SignupSubmitBtn type="submit">회원가입</S.SignupSubmitBtn>
      </S.SignupFormContainer>
    </S.SignupFormLayout>
  );
}
