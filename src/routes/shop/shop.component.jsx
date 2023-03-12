import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components/product-card/product-card.component';
import './shop.style.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <div key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              {categoriesMap[title].map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Shop;
