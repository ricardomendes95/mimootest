import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    span { 
        font-size: 24px;
    }
    img {
        margin-right: 20px;
    }
`

export const Nav = styled.ul`
  display: flex;
  justify-content: left;
  list-style: none;
  padding: 0;
  
`

export const NavItem = styled.li` 
  font-size: 14px;
  &:before {
    padding: 8px;
    color: #3A3A3A;
    content: ">";
  };
  &:after {
    content: ""
  }
  a {
    color: #3A3A3A;
    text-decoration: none
  }

`