import styled from 'styled-components';

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const OrderItemId = styled.span`
  font-weight: bold;
`;

export const OrderItemName = styled.span`
  font-size: 16px;
`;
