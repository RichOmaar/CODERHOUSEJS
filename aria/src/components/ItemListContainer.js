import { Card,Button,Col } from 'react-bootstrap';

export default function ItemListContainer(props) {
    return (
        <Col style={{
            paddingTop: '50px'
        }}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    <p style={{fontWeight: 'bold'}}>${props.precio} MXN</p>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
        </Col>
    );
}