import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Md from "react-markdown";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import OtherArticles from "../components/OtherArticles";
import { mediaQueries } from "../global/mediaQueries";
import { ParagraphMixin, WrapperMixin } from "../global/styledComponents";
import { extractSlugFromUrl } from "../helpers";

const StyledContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh auto;
  ${mediaQueries("tablet")`
    width: 80%;
  `}
`;

const StyledParagraph = styled(Md)`
  ${ParagraphMixin};
  width: 100%;
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-size: ${({ small, theme }) => (small ? theme.font.size.smallXL : theme.font.size.core)};
`;

const StyledSeparatingLine = styled.div`
  width: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.colors.lightContrast};
`;

const StyledWrapper = styled.main`
  ${WrapperMixin}
`;

const ArticleTemplate = ({ data, location }) => {
  const article = data.strapiArticles;
  const slug = location.href ? extractSlugFromUrl(location.href) : "";

  return (
    <Layout>
      <StyledWrapper>
        <Heading text={article.title} margin="4vh 0" />

        <StyledContentWrapper>
          <StyledParagraph margin="2vh auto">{article.content}</StyledParagraph>
          <StyledSeparatingLine />
        </StyledContentWrapper>

        <StyledParagraph center margin="4vh 0">
          Other articles:
        </StyledParagraph>

        <OtherArticles exceptedSlug={slug} />
      </StyledWrapper>
    </Layout>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query($slug: String!) {
    strapiArticles(slug: { eq: $slug }) {
      title
      content
      date(fromNow: true)
      slug
      categories {
        name
      }
    }
  }
`;
