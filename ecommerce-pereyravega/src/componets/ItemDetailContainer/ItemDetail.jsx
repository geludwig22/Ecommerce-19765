import React from 'react';
import { useState } from 'react'
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
                            <img  src={prod.thumbnailUrl} className="w-25" alt=" " />
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










export default ItemDetail;