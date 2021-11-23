import React from 'react';
import {useEffect, useState} from 'react'
import { Col, Row } from "react-bootstrap"
import { useCartContext } from '../Context/CartContext'



const ItemDetail = ({prod}) => {
    const [count, setCount] = useState(0)

    const {cartList, agregarCarrito } = useCartContext()
  
    const onAdd =(cant)=>{
        setCount(cant) 
        agregarCarrito( {...prod, cantidad: 2} )       
    }
    console.log(cartList)

    return (
        <Row>
                <label>Detalle</label>
                <Col>                
                    <div className='card w-50'>
                        <div className="container">
                            <label>{prod.nombre}</label>
                        </div>
                        <div className="container">
                            <img  src={prod.thumbnailUrl} className="w-25" alt="foto" />
                            <br/>
                            <label>{prod.categoria}</label>
                        </div>
                        <div className="container">
                            <label>{prod.precio}</label>
                        </div>
                    </div>
                </Col>
                <Col>
                  
                   <button onClick={onAdd}>Agregar Carrito</button>
                                      
                </Col>
            </Row>
    )
}





// const ItemDetail = ({prod}) => {

//   const [wasClicked, setWasClicked] = useState(false);
//   const handleAdd = (cantidad) => {
//     console.log(cantidad);
//     setWasClicked(true);
//   };
  


//     return (
//       <Card className="itemDetailCard">
//         <CardImg
//           alt={prod.titulo}
//           src={prod.thumbnailUrl}
//           top 
//         />
//         <CardBody>
//           <CardTitle tag="h2">{prod.titulo}</CardTitle>
//           <CardText>
//             {prod.categoria}
//             <br/>
//             {prod.precio}
//           </CardText>
//         </CardBody>
//         <CardBody>
//           {wasClicked ? (
//             <a>Ir al carrito</a>
//           ) : 
//           <ItemCount initial ={1} stock={prod.stock} onAdd={handleAdd} />}
//         </CardBody>
//       </Card>
      
//     );
// }











export default ItemDetail;