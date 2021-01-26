const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const articles = await graphql(`
    query {
      allStrapiArticles {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  articles.data.allStrapiArticles.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.slug}`,
      component: path.resolve(__dirname, "src/templates/article.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};
