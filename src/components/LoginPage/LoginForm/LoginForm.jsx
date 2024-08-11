import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginForm.styles';
import { AuthContext } from 'provider/AuthProvider';
import { useField } from 'hooks/useField';

export default function LoginForm() {
  const idField = useField('');
  const passwordField = useField('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (idField.value === 'test' && passwordField.value === 'test!234') {
      login();
      navigate('/');
    } else {
      alert('비밀번호를 확인해주세요');
    }
  };

  return (
    <S.LoginFormContainer onSubmit={handleLoginSubmit}>
      <S.LoginGroup>
        <S.LoginLabel htmlFor="id">아이디</S.LoginLabel>
        <S.LoginInput
          id="id"
          type="text"
          placeholder="아이디"
          value={idField.value}
          onChange={idField.onChange}
        />
      </S.LoginGroup>
      <S.LoginGroup>
        <S.LoginLabel htmlFor="password">비밀번호</S.LoginLabel>
        <S.LoginInput
          id="password"
          type="password"
          placeholder="비밀번호"
          value={passwordField.value}
          onChange={passwordField.onChange}
        />
      </S.LoginGroup>

      <S.LoginSubmitBtn type="submit">로그인</S.LoginSubmitBtn>
    </S.LoginFormContainer>
  );
}
