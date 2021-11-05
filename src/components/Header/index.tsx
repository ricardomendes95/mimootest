import { Link } from "react-router-dom";
import { PagePaths } from "../SideBar";
import * as S from "./styles";

export type HeaderProps = {
  icon: string;
  title: string;
  paths: PagePaths[];
};

export function Header({ icon, title, paths }: HeaderProps) {
  return (
    <S.Container>
      <S.Title>
        <img src={icon} />
        <span>{title}</span>
      </S.Title>
      <S.Nav>
        {paths?.map((path) => {
          return (
            <S.NavItem key={path.title}>
              <Link to={path.path}>{path.title}</Link>
            </S.NavItem>
          );
        })}
      </S.Nav>
    </S.Container>
  );
}
