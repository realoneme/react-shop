import './product-card.style.scss';
import { Button } from '../button/button.componente';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartToggleContext);
  const handleclick = () => {
    addItemToCart(product);
  };
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleclick}>
        Add to Cart
      </Button>
    </div>
  );
};
