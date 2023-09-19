export type InputType = "text" | "password" | "email" | "number";

export interface InputProps {
  label: string;
  type: InputType;
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  id?: string;
  className?: string;
}
