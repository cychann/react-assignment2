import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './MypageDetailContent.styles';

const orderDetails = [
  { id: 1, itemName: '아이템1' },
  { id: 2, itemName: '아이템2' },
  { id: 3, itemName: '아이템3' },
  { id: 4, itemName: '아이템4' },
  { id: 5, itemName: '아이템5' },
  { id: 6, itemName: '아이템6' },
  { id: 7, itemName: '아이템7' },
  { id: 8, itemName: '아이템8' },
  { id: 9, itemName: '아이템9' },
  { id: 10, itemName: '아이템10' },
];

export default function MypageDetailContent() {
  const { id } = useParams();
  const orderId = parseInt(id);
  const orderDetail = orderDetails.find((order) => order.id === orderId);

  if (!orderDetail) {
    return <p>주문을 찾을 수 없습니다.</p>;
  }

  return (
    <S.OrderDetailContainer>
      <S.OrderDetailId>주문 ID: {orderDetail.id}</S.OrderDetailId>
      <S.OrderDetailItemName>
        아이템 이름: {orderDetail.itemName}
      </S.OrderDetailItemName>
    </S.OrderDetailContainer>
  );
}
