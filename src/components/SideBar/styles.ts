import { Link } from "react-router-dom";
import styled from "styled-components";

import { MenuItemProps } from "./index";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
  img {
    width: 170px;
  }
`;

export const Menu = styled.div`
  height: 90%;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 50px;
  margin-right: 20px;
`;

export const MenuItemButton = styled(Link)<MenuItemProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  img {
    color: #3a3a3a;
    margin-right: 10px;
  }

  span {
    display: inline-block;
    color: #3a3a3a;
  }

  ${({ active }) => {
    if (active) {
      return `
                border-bottom: 1px solid #3A3A3A;
                img,
                span {
                    opacity: 1;
                }
            `;
    }
    return `
            img ,
            span {
            opacity: 0.5;
            }
        `;
  }};

  &:hover {
    img,
    span {
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  padding: 20px;
  height: 100px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #e5e5e5;
`;
