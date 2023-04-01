export const countPageAmount = (
  totalProducts: number,
  productsPerPage: number
): number[] => {
  const numberOfPages = [];

  for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
    numberOfPages.push(i);
  }

  return numberOfPages;
};
