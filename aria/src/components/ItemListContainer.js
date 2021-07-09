import { useState } from 'react';
import { Card,Button,Col,Form,Row } from 'react-bootstrap';

export default function ItemListContainer(props) {

    const [qty,setQty] = useState(1);

    return (
        <Col style={{
            paddingTop: '50px'
        }}>
            <Card style={{ width: '18rem' }} id={props.id}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    <p style={{fontWeight: 'bold'}}>${props.precio} MXN</p>
                </Card.Text>
                <Form onSubmit={ (data) => {props.addToCart(data,props)} }>
                    <Form.Group className="itemQty">
                    {/* <Form.Group className="itemQty"> */}
                    <Row>
                        <Col>
                            <Button variant="secondary" type="button" onClick={ () => {
                                if(props.stock > qty) {
                                    setQty(qty + 1)
                                }
                            }}>
                                +
                            </Button>
                        </Col>
                        <Col>
                            <Form.Control type="number"  value={qty} />
                        </Col>
                        <Col>
                            <Button variant="secondary"  type="button" onClick={ () => {
                                if(qty > 1){
                                    setQty(qty - 1);
                                }
                            }}>
                                -
                            </Button>
                        </Col>
                    </Row>
                    </Form.Group>
                    <Button className="mt-4 btn-block" variant="primary" type="submit">
                        Comprar
                    </Button>
                </Form>
            </Card.Body>
            </Card>
        </Col>
    );
}