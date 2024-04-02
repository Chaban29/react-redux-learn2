import { ChangeEvent, FC } from 'react';

interface IInput {
  type: string;
  id?: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInput> = ({ type, value, onChange }: IInput) => {
  return <input type={type} value={value} onChange={onChange} />;
};
