import { Input } from "../Form/Input";
import Logo from '../../assets/Logo.svg'
import { Button } from '../Form/Button'
import * as S from './style'

export function LoginBox() {
    return (
        <S.Container>
            <S.Logo src={Logo} alt="logo mimoo" />
            <Input 
            name="email"
            placeholder="Email"
            width="480px"
            />
            <Input 
            name="senha"
            placeholder="Senha"
            width="480px"
            />
            <a href="">Esqueceu a senha?</a>
            <Button />
            
            
        </S.Container>
    )
}