import { createSelector } from 'reselect';

const getProduct = (state) => state.product;

export const selectSingleProduct = createSelector(
  [getProduct],
  (product) => product
);

export const selectAllProduct = createSelector(
  [getProduct],
  (product) => product.products
);

export const selectAllProductCopy = createSelector(
  [getProduct],
  (product) => product.productsCopy
);

export const selectSearch = createSelector(
  [getProduct],
  (product) => product.search
);

export const selectCategory = createSelector(
  [getProduct],
  (product) => product.category
);
