import * as S from './styles'
export type ButtonProps = {
    label?: string;
    width: string;
    onClick?: ()=> void;
  }
export function Button({
    label,
    width,
    ...props
  }: ButtonProps) {
    return(
       <S.Button width={width} {...props}>{label}</S.Button>
    )
}