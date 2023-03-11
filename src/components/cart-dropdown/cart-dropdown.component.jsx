import { useContext } from 'react';
import { Button } from '../button/button.componente';
import { CartItem } from '../cart-item/cart-item.component';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import './cart-dropdown.style.scss';
import { Link } from 'react-router-dom';

export const CartDropDown = () => {
  const { status, cartItems } = useContext(CartToggleContext);
  return (
    <div className={`cart-dropdown-container ${status ? '' : ' hide'}`}>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}

        <Link to='/checkout'>
          <Button>CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};
