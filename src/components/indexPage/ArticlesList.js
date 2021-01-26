import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../global/mediaQueries";
import { FlexCenterMixin } from "../../global/styledComponents";
import ArticleCard from "../ArticleCard";

const StyledArticles = styled.section`
  ${FlexCenterMixin};
  min-height: 50vh;
  flex-direction: column;
  ${mediaQueries("tablet")`
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 55vh;
    justify-content: space-around;
  `}
  ${mediaQueries("desktop_FHD")`
    min-height: 65vh;
  `}
`;

const ArticlesList = ({ articles }) => {
  return (
    <StyledArticles>
      {articles.map(({ node: article }, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </StyledArticles>
  );
};

export default ArticlesList;
