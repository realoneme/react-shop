import { createContext, useEffect, useState } from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  // setproductData: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setproduct] = useState(PRODUCTS);
  const value = { products };

  useEffect(() => {
    // get data
    // if
    // setdata
  });

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
