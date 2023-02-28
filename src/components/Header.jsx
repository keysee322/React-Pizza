import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoSvg from '../assets/img/pizza-logo.svg';
import CartIcon from './Icons/CartIcon';
import Search from './Search';

function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const countSum = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>{countSum}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
