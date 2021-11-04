import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
    label?: string;
    width: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>;
  
export function Button({
    label = 'button',
    width = '250px',
    ...props
  }: ButtonProps) {
    return(
       <S.Button width={width} {...props}>{label}</S.Button>
    )
}