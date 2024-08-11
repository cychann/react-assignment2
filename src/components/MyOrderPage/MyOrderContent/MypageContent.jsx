import React, { useState } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import * as S from './MyPageContent.styles';

const orderData = {
  totalPages: 4,
  currentPage: 0,
  content: [
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
  ],
};

export default function MypageContent() {
  const [currentPage, setCurrentPage] = useState(orderData.currentPage);

  const handlePageChange = (page) => {
    if (page >= 0 && page < orderData.totalPages) {
      setCurrentPage(page);
    }
  };

  const itemsPerPage = 3;
  const currentItems = orderData.content.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <S.OrderPageContainer>
      <S.OrderList>
        {currentItems.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </S.OrderList>
      <S.Pagination>
        <S.PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          이전
        </S.PageButton>
        <span>
          {currentPage + 1} / {orderData.totalPages}
        </span>
        <S.PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === orderData.totalPages - 1}
        >
          다음
        </S.PageButton>
      </S.Pagination>
    </S.OrderPageContainer>
  );
}
