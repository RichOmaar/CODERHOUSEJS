
export default function ExternalData() {
    const array = [
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

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(array);
        }, 2000);
    });
}