export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
