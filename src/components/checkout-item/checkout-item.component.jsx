import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';

export const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity, id } = cartItem;
  const { removeItemFromCart, removeSingleItem, addSingleItem } = useContext(
    CartToggleContext
  );
  const clearItemHandler = () => removeItemFromCart(id);
  const removeItemHandler = () => removeSingleItem(id);
  const addItemHandler = () => addSingleItem(id);
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
