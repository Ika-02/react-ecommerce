import Alert from 'react-bootstrap/Alert';

const Error = ({error}) => {
    if (error) {
        return (
            <Alert variant="danger" style={{'margin': '2% 20%'}}>
                <Alert.Heading style={{'fontSize':'2.2em'}}>⚠ Une erreur s'est produite !</Alert.Heading>
                <p>Détail de l'erreur : <strong>{error}</strong></p>
                <hr />
                Cliquez <Alert.Link href="/">ici</Alert.Link> pour revenir à la page d'accueil ou recharger la page.
            </Alert>
        );
    }
}

export default Error;