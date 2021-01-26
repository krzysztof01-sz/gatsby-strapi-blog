import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { filterArticlesByCategory } from "../../helpers/";

const StyledSelect = styled.select`
  padding: 5px 10px;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.core};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.foundation};
  border-radius: 6px;
  cursor: pointer;
`;

const SelectInput = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const categories = data.allStrapiCategory.edges;

  return (
    <StyledSelect
      onChange={({ target: { value } }) => {
        if (typeof window !== "undefined") {
          filterArticlesByCategory(value);
        }
      }}>
      <option value="">all categories</option>
      {categories.map(({ node: { name } }) => (
        <option key={name}>{name}</option>
      ))}
    </StyledSelect>
  );
};

export default SelectInput;
