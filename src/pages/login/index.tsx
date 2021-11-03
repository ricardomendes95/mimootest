import * as S from './style'
import image from '../../assets/image.png'
import { LoginBox } from '../../components/loginBox'
export function Login() {
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
                <LoginBox />
            </S.Right>
        </S.Container>
    )   
}