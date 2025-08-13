import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  margin: 4px 0;
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? '#888' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition:
    color 0.3s,
    opacity 0.3s;
  background-color: ${({ disabled }) => (disabled ? 'rgb(245, 245, 245)' : 'white')};

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const Label: React.FC<LabelProps> = ({ htmlFor, text, disabled = false }) => {
  if (!text) return null;

  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
