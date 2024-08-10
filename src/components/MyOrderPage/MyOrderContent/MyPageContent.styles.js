import styled from 'styled-components';

export const OrderPageContainer = styled.div`
  padding: 20px;
`;

export const OrderList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
