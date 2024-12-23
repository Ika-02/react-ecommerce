import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = ({spinner}) => {
    return (
        <Card style={{
            'position': 'fixed',
            'zIndex': 10,
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
        }}>
            {spinner && <Spinner animation="border" variant="primary" id="spinner" style={{
                'padding': '40px',
                'margin': '20px'
            }}/>}
        </Card>
    );
}

export default LoadingSpinner;