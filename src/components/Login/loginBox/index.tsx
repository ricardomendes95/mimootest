import { Input } from "../../Form/Input/index";
import Logo from '../../../assets/Logo.svg'
import { Button } from '../../Form/Button'
import * as S from './style'
import { useState } from "react";

export function LoginBox() {
    const [labelButton, setLabelButton] = useState('Entrar')
    function handleSubmit() {
        console.log('deveria trocar');
        
        setLabelButton(labelButton === 'Entrar' ? '...Carregando' : 'Entrar')
    }
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
            <a href="/recover">Esqueceu a senha?</a>
            <Button width="480px" label={labelButton} onClick={handleSubmit}/>
            
            
        </S.Container>
    )
}