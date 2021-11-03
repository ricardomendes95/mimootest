import { Form } from 'react-bootstrap'
import { UseFormRegister } from 'react-hook-form';
import { FormControlProps } from 'react-bootstrap/FormControl';
import  * as S from './style'
import { InputHTMLAttributes, ReactNode, useMemo } from 'react';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  FormControlProps & {
    label?: string | ReactNode;
    register?: UseFormRegister<any>;
    error?: string;
    width?: string;
  };

export function Input({
    id,
    name,
    size,
    label,
    value,
    placeholder,
    error,
    register,
    ...props
  }: InputProps) {
    const registerProps = useMemo(
      () => (register && name ? register(name, { value }) : {}),
      [name, register, value]
    )
    return (
    <Form.Group className="mb-3">
        <S.Input placeholder={placeholder} {...registerProps} {...props} />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
    )
}