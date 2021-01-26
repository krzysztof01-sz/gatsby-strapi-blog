export const getCurrentYear = () => new Date().getFullYear();

export const extractSlugFromUrl = url => {
  const urlLength = url.length;
  if (url[urlLength - 1] === "/") url = url.slice(0, urlLength - 1);
  return url.split("/").pop();
};

export const filterArticlesByCategory = category => {
  const articlesToShow = [];
  const allArticles = Array.from(document.querySelectorAll("article"));
  const showAllArticles = () => allArticles.forEach(article => (article.style.display = "block"));
  const hideAllArticles = () => allArticles.forEach(article => (article.style.display = "none"));

  showAllArticles();

  if (!category) return showAllArticles();

  // select all span elements whom data-category attribute equals chosen category
  const filteredCategoryElements = document.querySelectorAll(`article span[data-category='${category}']`);

  if (filteredCategoryElements.length === 0) return hideAllArticles();
  filteredCategoryElements.forEach(element => articlesToShow.push(element.closest("article")));

  allArticles.forEach(el =>
    articlesToShow.includes(el) ? (el.style.display = "block") : (el.style.display = "none")
  );
};
