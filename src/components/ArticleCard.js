import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { mediaQueries } from "../global/mediaQueries";
import { imageSource } from "../global/constants";
import { routes } from "../global/routes";

const StyledArticle = styled.article`
  width: 90vw;
  padding: 2vh 0;
  border-bottom: 6px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 8vh;
  ${mediaQueries("tablet")`
    width: 40%;
  `}
  ${mediaQueries("desktop")`
    width: 30%;
  `}
`;

const StyledArticleTitle = styled.p`
  width: 100%;
  margin: 15px 0;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.font.size.smallXXL};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledImageSource = styled.p`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.lightContrast};
  text-align: left;
  margin: 5px 0;
`;

// span is associated with filtering helper
const StyledCategory = styled.span`
  font-size: ${({ theme }) => theme.font.size.smallXL};
`;

const StyledDate = styled.p`
  font-size: ${({ theme }) => theme.font.size.smallXL};
`;

const StyledArticleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrast};
`;

const ArticleCard = ({ article }) => {
  const { title, date, image, categories, slug } = article;

  return (
    <StyledArticle>
      <StyledArticleLink to={`${routes.article}/${slug}`}>
        <Img alt="image" fluid={image.childImageSharp.fluid} />
        <StyledImageSource>source: {imageSource}</StyledImageSource>
        <StyledArticleTitle>{title}</StyledArticleTitle>

        <StyledCategory>category: </StyledCategory>

        {categories.length === 0
          ? "not set"
          : categories.map(({ name }) => (
              <StyledCategory data-category={name} key={name}>
                {name}
                {" | "}
              </StyledCategory>
            ))}
        <StyledDate>published: {date}</StyledDate>
      </StyledArticleLink>
    </StyledArticle>
  );
};

export default ArticleCard;
