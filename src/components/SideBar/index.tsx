import { LiHTMLAttributes, ReactNode } from "react";
import logo from "../../assets/logo.svg";
import IconDashboard from "../../assets/IconDashboard.svg";
import IconMimoo from "../../assets/IconMimoo.svg";
import { UserSidebar } from "../UserSidebar";
import { Header } from "../Header";
import * as S from "./styles";

export type MenuItemProps = LiHTMLAttributes<HTMLLIElement> & {
  active: boolean;
};

export type HeaderPropsPath = {
  menuActive: string;
};

export type PagePaths = {
  title: string;
  path: string;
};

export type SidebarProps = {
  menuActive: "/dashboard" | "/sponsors";
  paths: PagePaths[];
  children: ReactNode;
};

export function Sidebar({
  menuActive,
  paths,
  children,
  ...props
}: SidebarProps) {
  const optionsMenu = [
    {
      icon: IconDashboard,
      title: "Dashboard",
      path: "/dashboard",
      paths: ["/dashboard"],
    },
    {
      icon: IconMimoo,
      title: "Patrocinadores",
      path: "/sponsors",
      paths: ["/sponsors"],
    },
  ];

  const page =
    optionsMenu.find((option) => option.path === menuActive) || optionsMenu[0];

  return (
    <S.Container>
      <S.Sidebar>
        <S.Logo>
          <img src={logo} alt="Logomarca" />
        </S.Logo>
        <S.Menu>
          <ul>
            {optionsMenu.map((menuItem, index) => {
              return (
                <S.MenuItem key={index}>
                  <S.MenuItemButton
                    active={menuActive === menuItem.path}
                    to={menuItem.path}
                  >
                    <img src={menuItem.icon} alt="Logomarca" />
                    <span>{menuItem.title}</span>
                  </S.MenuItemButton>
                </S.MenuItem>
              );
            })}
          </ul>
        </S.Menu>
        <UserSidebar />
      </S.Sidebar>

      <S.Content>
        <S.Header>
          <Header icon={page.icon} title={page.title} paths={paths} />
        </S.Header>
        <section>{children}</section>
      </S.Content>
    </S.Container>
  );
}
