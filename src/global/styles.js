import { createGlobalStyle } from "styled-components";
import { mediaQueries } from "./mediaQueries";

const lightTheme = {
  primary: "#51D3ED",
  lightContrast: "#777",
  contrast: "#212121",
  foundation: "#F7F7F7",
};

const darkTheme = {
  primary: "#77bbf7",
  lightContrast: "#b3b3b3",
  contrast: "#d1d1d1",
  foundation: "#222",
};

const theme = {
  font: {
    weight: {
      regular: 400,
      bold: 600,
    },
    family: {
      primary: "Montserrat",
    },
    size: {
      mini: "0.8rem",
      small: "1.2rem",
      smallXL: "1.5rem",
      core: "1.8rem",
      smallXXL: "2rem",
      medium: "2.3rem",
      mediumXL: "2.7rem",
      large: "3rem",
      largeXL: "4rem",
    },
  },
  colors: lightTheme,
};

const GlobalStyle = createGlobalStyle`
    :root {
      font-size: 62.5%;
      ${mediaQueries("desktop_FHD")`
        font-size: 75%;
      `}
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    body {
        font-size: ${theme.font.size.core};
        font-family: ${theme.font.family.primary};
        color: ${theme.colors.contrast};
        background-color: ${theme.colors.foundation};
        overflow-x: hidden;
    }
    ul {
      list-style-type: none
    }
    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
    ::selection {
      background-color: ${theme.colors.primary};
    }
`;

export { GlobalStyle, theme, lightTheme, darkTheme };
