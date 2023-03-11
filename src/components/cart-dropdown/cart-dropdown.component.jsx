import { useContext } from 'react';
import { Button } from '../button/button.componente';
import { CartItem } from '../cart-item/cart-item.component';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import './cart-dropdown.style.scss';

export const CartDropDown = () => {
  const { status, cartItems } = useContext(CartToggleContext);
  return (
    <div className={`cart-dropdown-container ${status ? '' : ' hide'}`}>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
        <Button>CHECKOUT</Button>
      </div>
    </div>
  );
};
