import { Input } from "../Form/Input/index";
import Logo from "../../assets/logo.svg";
import { Button } from "../Form/Button";
import * as S from "./style";
import { useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema, { FormProps } from "./validators";

export function RecoverForm() {
  const [labelButton, setLabelButton] = useState("Entrar");
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  function handleRecover(data: FormProps) {
    setLabelButton(labelButton === "Entrar" ? "...Carregando" : "Entrar");
    history.goBack();
  }
  console.log(errors);

  return (
    <S.Container onSubmit={handleSubmit(handleRecover)}>
      <S.Logo src={Logo} alt="logo mimoo" />
      <h3>Recupere sua senha</h3>
      <p>
        Digite seu email abaixo para receber o link de recuperação, caso seja um
        email cadastrado
      </p>
      <Input
        name="email"
        placeholder="Email"
        width="480px"
        register={register}
        error={errors.email?.message}
        isInvalid={!!errors.email}
      />
      <Button width="480px" label={labelButton} type="submit" />
    </S.Container>
  );
}
