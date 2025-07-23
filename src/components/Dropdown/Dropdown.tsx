import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

export const StyledDropdown = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ value, onChange, disabled = false }) => {
  return (
    <StyledDropdown disabled={disabled} value={value} onChange={onChange}>
      <option value="">-- Select an option --</option>
      <option value="option1">Option One</option>
      <option value="option2">Option Two</option>
      <option value="option3">Option Three</option>
    </StyledDropdown>
  );
};

export default Dropdown;
