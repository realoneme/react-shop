import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropDown } from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.style.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOuthandler = async () => {
    const res = await signOutUser();
  };
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Crown className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOuthandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/authentication'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
