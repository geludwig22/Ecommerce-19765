import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({prod}) => {
    return (
        <div class="card"  key={prod.id}>
                <img src={prod.thumbnailUrl} class="card-img-top" alt={prod.categoria} />
                <div class="card-body">
                <h5 class="card-title">{prod.titulo}</h5>
                <p class="card-text">{prod.precio}</p>
                <Link to={`/item/${prod.id}`}>
                <button className="btn btn-outline-primary">Detalles</button>
                </Link>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
                </div>
    )
}


export default Item;