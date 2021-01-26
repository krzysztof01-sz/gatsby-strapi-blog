import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { mediaQueries } from "../global/mediaQueries";
import { FlexCenterMixin } from "../global/styledComponents";
import ArticleCard from "./ArticleCard";

const StyledArticles = styled.section`
  ${FlexCenterMixin};
  flex-direction: column;
  ${mediaQueries("tablet")`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `}
`;

const OtherArticles = ({ exceptedSlug }) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles {
        edges {
          node {
            title
            content
            date(fromNow: true)
            slug
          }
        }
        ...PhotoFragment
        ...CategoriesFragment
      }
    }
  `);

  const filteredArticles = data.allStrapiArticles.edges.filter(
    ({ node: article }) => article.slug !== exceptedSlug
  );

  return (
    <StyledArticles>
      {filteredArticles.map(({ node: article }, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </StyledArticles>
  );
};

export default OtherArticles;
