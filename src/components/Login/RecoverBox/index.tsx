import { Input } from "../../Form/Input/index";
import Logo from '../../../assets/Logo.svg'
import { Button } from '../../Form/Button'
import * as S from './style'
import { useState } from "react";

export function RecoverBox() {
    const [labelButton, setLabelButton] = useState('Entrar')
    function handleSubmit() {
        setLabelButton(labelButton === 'Entrar' ? '...Carregando' : 'Entrar')
    }
    return (
        <S.Container>
            <S.Logo src={Logo} alt="logo mimoo" />
            <h3>Recupere sua senha</h3>
            <p>Digite seu email abaixo para receber o link de recuperação, caso seja um email cadastrado</p>
            <Input 
            name="Email"
            placeholder="Email"
            width="480px"
            />
            <Button width="480px" label={labelButton} onClick={handleSubmit}/>
            
            
        </S.Container>
    )
}