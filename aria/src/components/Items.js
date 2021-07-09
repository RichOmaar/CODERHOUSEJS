import { useState,useEffect,useRef } from 'react';
import { Row,Container,Card } from 'react-bootstrap';
import ItemListContainer from "./ItemListContainer";

export default function Items() {

    const [cart,setCart] = useState([]);
    const [array,setArray] = useState([
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
            ]
    );

    const items = () => {
        let item = array.map(index => {
            return (
                <ItemListContainer
                    id = {index.id}
                    img = {index.img}
                    titulo = {index.titulo}
                    descripcion = {index.descripcion}
                    precio = {index.precio}
                    stock = {index.stock}
                    addToCart = {getProducts}
                    /> 
            )
        })

        return item;
    }

    const primerRender = useRef(true);

    const getProducts = (form,item) => {
        form.preventDefault();
        // console.log(form);
        // console.log(item);
        let items = {
            titulo:item.titulo,
            img:item.img,
            precio:item.precio,
            qty:form.target[1].value
        }

        setCart([...cart,items]);
        // console.log(form.target[1].value);
        console.log(cart);
    }

    useEffect(() => {
        if(primerRender.current){
            primerRender.current = false;
        } else{
            alert('Se agregó el item al carrito');
        }
    },[cart]);
    

    return (
        <Container>
            <Row>
                {items()}
                {/* <ItemListContainer
                    id= '1'
                    img= "https://ariamor.com.mx/vista/assets/images/soap-product-1.jpg"
                    titulo= "Tea Totaler"
                    descripcion= "Para una piel limpia y sin impurezas"
                    precio= '200'
                    stock=  '20'
                    addToCart = {getProducts}
                    />   */}

                {/* <Card.Text className="subtotal1">
                    {cart.map(element => {
                        return (
                            <>
                                <h1>Hola mundo</h1>
                            </>
                        );
                    })}
                </Card.Text> */}
            </Row>
        </Container>
    )
}