import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import './cart-icon.style.scss';

export const CartIcon = () => {
  const { status, setStatus, total } = useContext(CartToggleContext);
  const handleToggle = () => setStatus(!status);
  return (
    <div className={`cart-icon-container`} onClick={handleToggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{total}</span>
    </div>
  );
};
