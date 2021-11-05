import { ReactNode } from "react";
import image from "../../assets/login.svg";
import * as S from "./style";

type LoginProps = {
  children: ReactNode;
};

export function LoginLayout({ children }: LoginProps) {
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
      <S.Right>{children}</S.Right>
    </S.Container>
  );
}
