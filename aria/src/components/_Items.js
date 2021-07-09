import { Component } from 'react';
import { Row,Container } from 'react-bootstrap';
import ItemListContainer from "./ItemListContainer";

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.array = [
            {
                id:1,
                img:"https://ariamor.com.mx/vista/assets/images/soap-product-1.jpg",
                titulo:"Tea Totaler",
                descripcion:"Para una piel limpia y sin impurezas",
                precio:200,
                stock: 20
            },
            {
                id:2,
                img:"https://ariamor.com.mx/vista/assets/images/soap-product-2.jpg",
                titulo:"Jason And The Argan Oil",
                descripcion:"Una melena sedosa y con aroma a rosas",
                precio:255,
                stock: 2
            },
            {
                id:3,
                img:"https://ariamor.com.mx/vista/assets/images/soap-product-3.jpg",
                titulo:"Aromaco",
                descripcion:"Refrescante y efectivo",
                precio:175,
                stock: 1
            },
            {
                id:3,
                img:"https://ariamor.com.mx/vista/assets/images/soap-product-4.jpg",
                titulo:"Outback Mate",
                descripcion:"El que quiere azul celeste, que Outback Mate pruebe",
                precio:170,
                stock: 50
            }
        ];
    }

    render() {
        const mapFunctionComponente = () => {
            let items = [];

            for(let index of this.array){
                let item = <ItemListContainer
                            id = {index.id}
                            img = {index.img}
                            titulo = {index.titulo}
                            descripcion = {index.descripcion}
                            precio = {index.precio}
                            stock = {index.stock}
                            />
                    items = [...items,item];
            }
            return items;
        }

        return (
            <Container>
                <Row>
                    {mapFunctionComponente()}
                </Row>
            </Container>
        )
    }
}