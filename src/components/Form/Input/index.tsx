import { Form } from 'react-bootstrap'
import { UseFormRegister } from 'react-hook-form';
import { FormControlProps } from 'react-bootstrap/FormControl';
import  * as S from './style'
import { InputHTMLAttributes, ReactNode, useMemo } from 'react';
type Props = { 
  label?: string ;
  register?: UseFormRegister<any>;
  error?: string;
  width?: string;
  placeholder?: string;
  isInvalid?: boolean;
}
export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FormControlProps & Props;

export function Input({
    id,
    name,
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
        {label && <label htmlFor={id}>{label}</label>}
        <S.Input id={id} placeholder={placeholder} {...registerProps} {...props} />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
    )
}