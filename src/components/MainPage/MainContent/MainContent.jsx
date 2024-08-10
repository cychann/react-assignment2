import React, { useContext } from 'react';
import * as S from './MainContent.styles';
import ReactLogo from 'assets/images/logo.svg';
import { AuthContext } from 'provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function MainContent() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      alert('주문 성공!');
    } else {
      navigate('/login');
    }
  };

  return (
    <S.MainContentContainer>
      <S.ServiceImg src={ReactLogo} />
      <S.OrderBtn onClick={handleSubmitOrder}>주문 하기</S.OrderBtn>
    </S.MainContentContainer>
  );
}
