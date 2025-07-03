import React from "react";
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px 20px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled, backgroundColor }) =>
      disabled ? '#ccc' : backgroundColor || '#0056b3'};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, disabled = false, onClick, backgroundColor }) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      backgroundColor={backgroundColor}
    >
      {text}
    </StyledButton>
  );
};

export default Button;