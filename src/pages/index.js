import React from "react";
import styled from "styled-components";
import { FlexCenterMixin, WrapperMixin } from "../global/styledComponents";
import SelectInput from "../components/indexPage/SelectInput";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import ArticlesList from "../components/indexPage/ArticlesList";

const StyledWrapper = styled.main`
  ${WrapperMixin}
`;

const StyledHeader = styled.section`
  ${FlexCenterMixin}
  flex-direction: column;
  margin: 0 auto 5vh;
`;

const IndexPage = ({ data }) => {
  const articles = data.allStrapiArticles.edges;

  return (
    <Layout>
      <StyledWrapper>
        <StyledHeader>
          <Heading text="The newest articles" margin="6vh 0 2vh" />
          <SelectInput />
        </StyledHeader>

        <ArticlesList articles={articles} />
      </StyledWrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiArticles(sort: { fields: date, order: ASC }) {
      edges {
        node {
          title
          date
          slug
        }
      }
      ...PhotoFragment
      ...CategoriesFragment
    }
  }
`;

export default IndexPage;
