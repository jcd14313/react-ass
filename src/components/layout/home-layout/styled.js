import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  background: #5046e5;
  color: #bbbbbb;
`;

export const HeaderContent = styled.div`
  margin-left: 10px;
`;

export const Page = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  /* calculate the height. Header is 30px */
`;

export const SideBar = styled.div`
  width: 100%;
  max-width: 200px;
  background: #fff;
  border-right: 1px solid #f0f0f0;
`;

export const Main = styled.div`
  background: rgb(247, 249, 251);
  flex: 1 0 auto;
  padding: 40px 0 20px 0;
  /* enable grow, disable shrink */
  padding: 20px;
`;

export const InnerHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #fff;
    font-size: 22px;
  }
  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.5ms ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Nav = styled.nav`
  margin-top: 50px;

  ul {
    list-style: none;

    li {
      background: transparent;
    }
  }
`;
export const MenuLink = styled(Link)`
  color: #000;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.5ms ease-in-out;
  display: inline-block;
  width: 100%;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 4px;
  padding-left: 20px;
  &.active {
    background: #1466f2;
    color: #fff;
  }
  &:hover {
    background: #1466f2;
    color: #fff;
  }
`;
