import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

export const StyledText = styled.span<{ disabled?: boolean; color?: string; fontSize?: string }>`
  color: ${({ disabled, color }) => (disabled ? '#888' : color || '#000')};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  user-select: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: color 0.3s ease;

  @media (max-width: 600px) {
    font-size: ${({ fontSize }) => (fontSize ? `calc(${fontSize} * 0.9)` : '0.9rem')};
  }
`;

const Text: React.FC<TextProps> = ({ children, disabled = false, color, fontSize }) => {
  return (
    <StyledText disabled={disabled} color={color} fontSize={fontSize}>
      {children}
    </StyledText>
  );
};

export default Text;
