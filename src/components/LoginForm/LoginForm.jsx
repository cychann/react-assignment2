import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginForm.styles';
import { AuthContext } from 'provider/AuthProvider';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (id === 'test' && password === 'test!234') {
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
          value={id}
          onChange={handleIdChange}
        />
      </S.LoginGroup>
      <S.LoginGroup>
        <S.LoginLabel htmlFor="password">비밀번호</S.LoginLabel>
        <S.LoginInput
          id="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePassword}
        />
      </S.LoginGroup>

      <S.LoginSubmitBtn type="submit">로그인</S.LoginSubmitBtn>
    </S.LoginFormContainer>
  );
}
