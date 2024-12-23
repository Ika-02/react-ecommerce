import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

import ProductItemForm from './ProductItemForm';

const ProductItem = ({item}) => {
  return (
    <Card>
      <Link to={'/product/'+item.id} style={{'textDecoration': 'none', 'color': 'black'}}>
      <Card.Img variant="top" src={item.mainImage} style={{'height': '500px'}} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
      </Card.Body>
      </Link>
      <Card.Footer>
        <Card.Text>Prix unitaire : {item.price}€</Card.Text>
        <ProductItemForm item={item} />
      </Card.Footer>
    </Card>
  );
}

export default ProductItem;