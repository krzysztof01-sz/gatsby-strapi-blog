import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "../global/mediaQueries";
import { headerContent } from "../global/pagesContent";
import { routes } from "../global/routes";
import HamburgerIcon from "./HamburgerIcon";
import Nav from "./Nav";

const { title, slogan } = headerContent;

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  position: relative;
`;

const StyledHeaderTitle = styled.p`
  text-align: left;
  margin-bottom: 1vh;
  color: ${({ theme }) => theme.colors.foundation};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const StyledHeaderSlogan = styled.p`
  color: ${({ theme }) => theme.colors.foundation};
  font-size: ${({ theme }) => theme.font.size.smallXL};
  text-align: left;
  margin-left: 10vw;
  ${mediaQueries("desktop")`
    margin-left: 4vw;
  `}
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav isOpen={isOpen} />
      <StyledHeader>
        <Link to={routes.homepage}>
          <StyledHeaderTitle>{title}</StyledHeaderTitle>
        </Link>
        <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <Link to={routes.homepage}>
          <StyledHeaderSlogan>{slogan}</StyledHeaderSlogan>
        </Link>
      </StyledHeader>
    </>
  );
};

export default Header;
