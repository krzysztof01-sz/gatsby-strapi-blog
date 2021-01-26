import React from "react";
import styled from "styled-components";
import { contactPageContent } from "../global/pagesContent";
import { mediaQueries } from "../global/mediaQueries";
import { ParagraphMixin, StyledImage, StyledLink, WrapperMixin } from "../global/styledComponents";
import ComputerAndTeapot from "../images/computer-and-teapot.png";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

const { heading, description } = contactPageContent.texts;
const { links } = contactPageContent;

const StyledWrapper = styled.main`
  ${WrapperMixin}
  ${mediaQueries("desktop")`
    width: 60vw;
  `}
`;

const StyledParagraph = styled.p`
  ${ParagraphMixin}
`;

const StyledLinks = styled.section`
  margin: 2vh 0 5vh;
`;

const AboutPage = () => {
  return (
    <Layout>
      <StyledWrapper>
        <Heading text={heading} margin="5vh 0" />
        <StyledParagraph margin="2vh 0 5vh">{description}</StyledParagraph>

        {links.map(({ name, link }, index) => (
          <StyledLinks key={index}>
            <StyledParagraph>{name}</StyledParagraph>
            {name === "Email:" ? (
              <StyledLink href={link}>{link.split(":")[1]}</StyledLink>
            ) : (
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </StyledLink>
            )}
          </StyledLinks>
        ))}

        <StyledImage src={ComputerAndTeapot} alt="Computer and teapot" />
      </StyledWrapper>
    </Layout>
  );
};

export default AboutPage;
