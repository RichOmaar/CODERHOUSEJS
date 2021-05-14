import React from 'react'

import { Col, Container, ResponsiveEmbed, Row } from 'react-bootstrap'
import videoOne from '../assets/video-1.mp4';

const ItemListContainer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="6">
                        <div>
                            <h1>Sould & Body</h1>
                            <p>“Cuidado del alma y el cuerpo. Creemos que podemos estar en paz y armonía con nuestro entorno.”</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div style={{ height: 'auto' }}>
                            <ResponsiveEmbed aspectRatio="1by1" autoplay="autoplay">
                                <embed type="video/mp4" src={videoOne} />
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemListContainer