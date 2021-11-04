import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema, { FormProps } from "./validators";

import { Input } from "../Form/Input/index";
import Logo from "../../assets/logo.svg";
import { Button } from "../Form/Button";
import * as S from "./style";

export function LoginForm() {
  const [labelButton, setLabelButton] = useState("Entrar");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  function handleLogin(data: FormProps) {
    setLabelButton(labelButton === "Entrar" ? "...Carregando" : "Entrar");
  }

  return (
    <S.Form onSubmit={handleSubmit(handleLogin)}>
      <S.Logo src={Logo} alt="logo mimoo" />
      <Input
        name="login"
        placeholder="Email"
        register={register}
        error={errors.login?.message}
        isInvalid={!!errors.login}
        width="480px"
      />
      <Input
        name="password"
        placeholder="Senha"
        register={register}
        error={errors.password?.message}
        isInvalid={!!errors.password}
        width="480px"
        type="password"
      />
      <a href="/recover">Esqueceu a senha?</a>
      <Button width="480px" label={labelButton} type="submit" />
    </S.Form>
  );
}
