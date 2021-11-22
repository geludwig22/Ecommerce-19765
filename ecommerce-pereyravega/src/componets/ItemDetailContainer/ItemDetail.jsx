import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
} from 'reactstrap'; 
// import '../App.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';





const ItemDetail = ({prod}) => {

  const [wasClicked, setWasClicked] = useState(false);
  const handleAdd = (cantidad) => {
    console.log(cantidad);
    setWasClicked(true);
  };
  


    return (
      <Card className="itemDetailCard">
        <CardImg
          alt={prod.titulo}
          src={prod.thumbnailUrl}
          top 
        />
        <CardBody>
          <CardTitle tag="h2">{prod.titulo}</CardTitle>
          <CardText>
            {prod.categoria}
            <br/>
            {prod.precio}
          </CardText>
        </CardBody>
        <CardBody>
          {wasClicked ? (
            <a>Ir al carrito</a>
          ) : 
          <ItemCount initial ={1} stock={prod.stock} onAdd={handleAdd} />}
        </CardBody>
      </Card>
      
    );
}











export default ItemDetail;