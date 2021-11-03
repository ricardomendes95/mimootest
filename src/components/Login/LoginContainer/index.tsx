import * as S from './style'
import image from '../../../assets/login.svg'
import { ReactNode } from 'react';
type LoginProps = {
    children: ReactNode;
  };
  
export function LoginContainer({ children }: LoginProps) {
    return (
        <S.Container>
            <S.Left>
                <S.Content>
                    <h1>1º programa de lealdade do Brasil</h1>
                    <p>Baseado na empatia, gratidão e sustentabilidade.</p>
                </S.Content>
                <S.Image>
                    <img src={image} />
                </S.Image>
            </S.Left>
            <S.Right>
                {children}
            </S.Right>
        </S.Container>
    )   
}