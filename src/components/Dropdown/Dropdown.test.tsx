import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('renders dropdown with default option selected', () => {
    render(<Dropdown value="job" onChange={() => {}} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeVisible();
    expect(select).toHaveValue('job');
  });

  test('renders dropdown in disabled state', () => {
    render(<Dropdown value="job" disabled onChange={() => {}} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeVisible();
    expect(select).toBeDisabled();
    expect(select).toHaveStyle('background-color: #ccc');
  });

  test('renders empty option when value is empty', () => {
    render(<Dropdown value="" onChange={() => {}} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeVisible();
    expect(select).toHaveValue('');
  });
});
