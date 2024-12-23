import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

const ProductPage = ({items}) => {
    const id = useParams().id;
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);

    /*
    useEffect(() => {
        setItem(items.find((item) => item.id === id));
        setLoading(false);
    }, null);
    */

    const getData = () => {
    axios.get('http://localhost:3000/api/product/' + id)
        .then((response) => {setItem(response.data.product);})
        .catch((error) => {setItem(null)})
        .finally(() => {setLoading(false);});
    }
    useEffect(getData, []);
    
    if (loading) {return (<p>Loading...</p>);}
    if (!item) {return <Navigate replace to="/404" />;}

    const carousel = item.images.map((image, index) => {
        return (
            <Carousel.Item key={index}>
                <Image src={image} thumbnail></Image>
            </Carousel.Item>
        );
    });

    return (
        <>
            <h3 style={{'textAlign': 'center'}}>Page produit</h3>
            <Row xs={1} md={2} style={{padding: '25px'}}>
                <Col>
                    <Carousel slide={false}>
                        {carousel}
                    </Carousel>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle>Prix : {item.price} €</Card.Subtitle>
                            <Card.Text>Stock : {item.quantity}</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>Note : {item.ratingsAverage}⭐</Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default ProductPage;