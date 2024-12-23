import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import { Cart } from './Cart';

const CartPanel = ({show, close}) => {
    const cart = useContext(Cart)
    const items = cart.state.cart;

    const remove = (item) => cart.dispatch({type: 'remove', item: item});
    const empty = () => {
        cart.dispatch({type: 'empty'});
        close();
    }

    let cartItems = items.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><Button onClick={() => {remove(item);}} variant="danger">🗑</Button></td>
            </tr>
        );
    });
    
    let cartTotal = parseFloat(
            items.reduce((total, item) => total + item.price * item.quantity, 0)
        ).toFixed(2);

    return (
        <Modal show={show} onHide={close} backdrop="static" size="lg">
            <Modal.Header closeButton>
                <Modal.Title>🛒 Votre panier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover style={{'textAlign': 'center'}}>
                    <thead>
                        <tr>
                            <th>Référence</th>
                            <th>Nom</th>
                            <th>Prix (€)</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </Table>
                <Modal.Title style={{textAlign: 'right'}}>Total : {cartTotal}€</Modal.Title>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={empty}>Passer la commande</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CartPanel;