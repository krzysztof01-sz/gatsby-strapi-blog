import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import ComputerCodeImage from "../images/computer-code.png";
import { aboutPageContent } from "../global/pagesContent";
import { mediaQueries } from "../global/mediaQueries";
import { routes } from "../global/routes";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import {
  FlexCenterMixin,
  ParagraphMixin,
  StyledImage,
  StyledLink,
  WrapperMixin,
} from "../global/styledComponents";

const StyledButton = styled.button`
  ${FlexCenterMixin}
  align-self: flex-end;
  padding: 10px 15px;
  margin: 2vh 0 5vh;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.foundation};
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.smallXL};
  cursor: pointer;
  ${mediaQueries("desktop")`
    padding: 15px;
  `}
`;

const StyledButtonWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

const StyledParagraph = styled.p`
  ${ParagraphMixin}
  ${mediaQueries("desktop")`
    line-height: 160%;
  `}
`;

const StyledWrapper = styled.main`
  ${WrapperMixin}
  ${mediaQueries("tablet")`
    width: 70vw;
  `}
  ${mediaQueries("desktop")`
    width: 60vw;
  `}
`;

const StyledProjectsSection = styled.section`
  margin: 2vh 0 5vh;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const {
  heading,
  usedTechnologies,
  checkArticlesButton,
  technologiesButton,
  publishedProjects,
  description,
} = aboutPageContent.texts;
const { technologies } = aboutPageContent;
const { projects } = aboutPageContent;

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <StyledWrapper>
        <Heading text={heading} margin="10vh 0 5vh" />

        <StyledHeaderWrapper>
          <StyledParagraph margin="2vh 0">{description}</StyledParagraph>
          <StyledButtonWrapper to={routes.homepage}>
            <StyledButton>{checkArticlesButton}</StyledButton>
          </StyledButtonWrapper>
        </StyledHeaderWrapper>

        <StyledImage src={ComputerCodeImage} alt="computer code" />
        <StyledParagraph margin="2vh 0 4vh">{usedTechnologies}</StyledParagraph>
        <StyledButton onClick={() => setIsOpen(!isOpen)}>{technologiesButton}</StyledButton>

        {isOpen &&
          technologies.map((technology, index) => (
            <StyledParagraph margin="0 0 1vh" key={index}>
              - {technology}
            </StyledParagraph>
          ))}

        <StyledParagraph margin="5vh 0">{publishedProjects}</StyledParagraph>

        {projects.map(({ name, link }, index) => (
          <StyledProjectsSection key={index}>
            <StyledParagraph>{name}</StyledParagraph>
            <StyledLink href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </StyledLink>
          </StyledProjectsSection>
        ))}
      </StyledWrapper>
    </Layout>
  );
};

export default AboutPage;
