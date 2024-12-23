import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProductItem from './ProductItem';

const Products = ({items}) => {
  return (
    <>
      <Row xs={1} md={2} style={{padding: '10px'}}>
        {items.map((item) => (
          <Col key={item.id} style={{padding: '10px'}}>
            <ProductItem item={item} />
          </Col>
        ))}
      </Row>
    </>    
  );
}

export default Products;