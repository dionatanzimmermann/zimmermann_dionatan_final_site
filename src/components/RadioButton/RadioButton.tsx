import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const StyledRadioOption = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type='radio'] {
    accent-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  label {
    color: ${({ disabled }) => (disabled ? '#666' : '#000')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ options, value, onChange, disabled = false }) => {
  return (
    <StyledRadioGroup>
      {options.map((option) => (
        <StyledRadioOption key={option.value} disabled={disabled}>
          <input
            type="radio"
            name="radioGroup"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
          <label>{option.label}</label>
        </StyledRadioOption>
      ))}
    </StyledRadioGroup>
  );
};

export default RadioButton;
