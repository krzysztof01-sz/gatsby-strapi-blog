import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../global/mediaQueries";
import { footerContent } from "../global/pagesContent";
import { getCurrentYear } from "../helpers";

const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  padding: 2vw;
  ${mediaQueries("desktop")`
    font-size: ${({ theme }) => theme.font.size.smallXL};
  `}
`;

const Footer = () => {
  return (
    <StyledFooter>
      {footerContent.text} {getCurrentYear()}
    </StyledFooter>
  );
};

export default Footer;
