import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledImage = styled.img`
  width: 100%;
  margin: 0 auto 5vh;
`;

// mixins

export const FlexCenterMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperMixin = css`
  width: 90vw;
  margin: 0 auto;
`;

export const ParagraphMixin = css`
  margin: ${({ margin }) => margin};
  text-align: left;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.contrast};
`;
