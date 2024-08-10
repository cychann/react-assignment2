import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OrderItem.styles';

export default function OrderItem({ item }) {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/mypage/order/${id}`);
  };
  return (
    <S.OrderItem key={item.id} onClick={() => handleItemClick(item.id)}>
      <S.OrderItemId>{item.id}</S.OrderItemId>
      <S.OrderItemName>{item.itemName}</S.OrderItemName>
    </S.OrderItem>
  );
}
