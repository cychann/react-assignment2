import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'provider/AuthProvider';
import * as S from './LogoutContent.styles';

export default function LogoutContent() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <S.LogoutContentContainer>
      <S.LogoutBtn onClick={handleLogout}>로그아웃</S.LogoutBtn>
    </S.LogoutContentContainer>
  );
}
