import { useContext } from 'react';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { Cart } from '../Cart/Cart';

const HeaderCartButton = ({clickCart}) => {
  const cart = useContext(Cart).state.cart;
  const item_nbr = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Button variant="primary" onClick={clickCart}>
      🛒 Panier <Badge bg="secondary">{item_nbr}</Badge>
      <span className="visually-hidden">articles</span>
    </Button>
  );
}

export default HeaderCartButton;