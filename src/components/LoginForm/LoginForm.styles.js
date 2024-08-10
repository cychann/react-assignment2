import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LoginLabel = styled.label``;

export const LoginInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? 'red' : '#ccc')};
  border-radius: 4px;
  background-color: #fff;

  &::placeholder {
    color: #aaa;
  }
`;

export const LoginSubmitBtn = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
`;
