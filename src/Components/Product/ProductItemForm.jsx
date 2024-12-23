import { useState, useRef, useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Cart } from '../Cart/Cart';

const ProductItemForm = ({item}) => {
  const cart = useContext(Cart);

  const [invalid, setInvalid] = useState(false);
  const quantity = useRef();

  const check = (e) => {
    let num = quantity.current.value;
    if (num === null || !Number.isInteger(parseInt(num)) || num < 1 || Number.isNaN(parseInt(num)) || num > item.quantity) {
      setInvalid(true);
      return;
    } else {
      setInvalid(false);
    }
    if (e.target.type == "button") {
      cart.dispatch({type: 'add', item: item, quantity: parseInt(num)});
    }
  }

  return (
    <InputGroup hasValidation>
      <Form.Control
        ref={quantity}
        type="number"
        placeholder={item.quantity != 0 ? "Quantité" : "Rupture de stock"}
        min="1"
        max={item.quantity}
        isInvalid={invalid}
        onChange={check}
        aria-describedby="button-addon2"
      />
      {item.quantity != 0 ? <Button variant="outline-primary" id="button-addon2" onClick={check}>
        Ajouter au panier
      </Button> : ""}
    </InputGroup>
  );
}

export default ProductItemForm;