import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { graphql } from "gatsby";
import { GlobalStyle, theme, lightTheme, darkTheme } from "../global/styles";
import { ThemeContext } from "../contexts/theme";
import Footer from "./Footer";
import Header from "./header";
import ThemeSwitcher from "./ThemeSwitcher";

const StyledBackground = styled.main`
  background-color: ${({ theme }) => theme.colors.foundation};
`;

const Layout = ({ children }) => {
  const [colors, setColors] = useState(typeof window !== "undefined" && localStorage.getItem("theme"));
  const createTheme = () => ({ ...theme, colors: colors === "light" ? lightTheme : darkTheme });

  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      <ThemeProvider theme={createTheme()}>
        <StyledBackground>
          <GlobalStyle />
          <Header />
          <ThemeSwitcher />
          {children}
          <Footer />
        </StyledBackground>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// global graphql fragments

export const categories = graphql`
  fragment CategoriesFragment on StrapiArticlesConnection {
    edges {
      node {
        categories {
          name
        }
      }
    }
  }
`;

export const imageFragment = graphql`
  fragment PhotoFragment on StrapiArticlesConnection {
    edges {
      node {
        image {
          childImageSharp {
            fluid(
              srcSetBreakpoints: [600, 1000, 1366, 1920, 2560]
              maxWidth: 1000
              maxHeight: 500
              quality: 70
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Layout;
