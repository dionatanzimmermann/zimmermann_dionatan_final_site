import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

const options = [
  { label: 'Option One', value: 'option1' },
  { label: 'Option Two', value: 'option2' },
  { label: 'Option Three', value: 'option3' },
];

describe('RadioButton', () => {
  test('renders all radio options and checks default selected', () => {
    render(
      <RadioButton
        options={options}
        value="option1"
        onChange={() => {}}
      />
    );
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(3);
    expect(radios[0]).toBeChecked();
    radios.forEach((radio) => expect(radio).toBeVisible());
  });

  test('renders disabled radios correctly', () => {
    render(
      <RadioButton
        options={options}
        value="option1"
        disabled
        onChange={() => {}}
      />
    );
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => expect(radio).toBeDisabled());
    radios.forEach((radio) => expect(radio).toBeVisible());
  });
});