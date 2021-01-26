import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.div`
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.foundation};
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
`;

const NavItem = ({ value }) => {
  return <StyledNavItem>{value}</StyledNavItem>;
};

export default NavItem;
