// import { Button } from "bootstrap";
import React, {useState} from "react";

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < stock ? setCount(count + 1) : alert ('Sin stock disponible')
    }
    const restar = () => {
        count > initial ? setCount(count - 1) : alert ('No hay productos seleccionados')
    }
    
    const onAdd = () => {
        alert(`Agregaste ${count} productos`)
    }
    
    
    
    return(
        <div>
        <button className='btn btn-outline-primary' onClick={sumar}>+</button>
        <label>Cantidad: {count}</label>
        <button className='btn btn-warning' onClick={restar}>-</button>

        <button className='btn btn-outline-secondary' onClick={onAdd}>Agregar</button>

        </div>
    )
}

export default ItemCount;