import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  test('renders headers and data', () => {
    render(
      <Table
        headers={['Name', 'Age']}
        data={[['Alice', '28'], ['Bob', '32']]}
      />
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Alice')).toBeVisible();
  });

  test('renders footer', () => {
    render(
      <Table
        headers={['Name']}
        data={[['Alice']]}
        footer="Summary"
      />
    );
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Summary')).toBeVisible();
  });

  test('applies disabled styles', () => {
    render(
      <Table
        headers={['Name']}
        data={[['Alice']]}
        disabled
      />
    );
    expect(screen.getByText('Alice').parentElement).toHaveStyle('opacity: 0.6');
    expect(screen.getByText('Alice').parentElement).toHaveStyle('background-color: rgb(204, 204, 204)');
    expect(screen.getByText('Alice')).toBeVisible();
  });

  test('returns null when empty', () => {
    const { container } = render(<Table headers={[]} data={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
