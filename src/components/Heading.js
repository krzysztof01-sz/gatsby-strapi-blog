import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  margin: ${({ margin }) => margin};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.contrast};
`;

const Heading = ({ text, margin }) => {
  return <StyledHeading margin={margin}>{text}</StyledHeading>;
};

export default Heading;
