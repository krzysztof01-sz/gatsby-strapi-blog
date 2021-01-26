import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { menuItems, menuTransitionTime } from "../global/constants";
import { theme } from "../global/styles";
import { ThemeContext } from "../contexts/theme";
import NavItem from "./NavItem";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 10vh 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ isLightTheme }) => (isLightTheme ? theme.colors.contrast : theme.colors.foundation)};
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : 100)}%);
  transition: transform ${menuTransitionTime}s ease-in-out;
`;

const StyledNavItemLink = styled(Link)`
  text-decoration: none;
`;

const Nav = ({ isOpen }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <StyledNav isLightTheme={colors === "light"} isOpen={isOpen}>
      {menuItems.map(({ pathName, name }) => (
        <StyledNavItemLink to={pathName} key={name}>
          <NavItem value={name} />
        </StyledNavItemLink>
      ))}
    </StyledNav>
  );
};

export default Nav;
