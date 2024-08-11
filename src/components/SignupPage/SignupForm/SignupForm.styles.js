import styled from 'styled-components';

export const SignupFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SignupFormContainer = styled.form`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SignupGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignupLabel = styled.label``;

export const SignupInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? 'red' : '#ccc')};
  border-radius: 4px;
  background-color: #fff;

  &::placeholder {
    color: #aaa;
  }
`;

export const SignupSubmitBtn = styled.button`
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
