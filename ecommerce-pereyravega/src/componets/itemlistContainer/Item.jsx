import React from 'react'


export const Item = ({prod}) => {
    return (
        <div class="card"  key={prod.id}>
                <img src={prod.thumbnailUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">{prod.categoria}</h5>
                <p class="card-text">{prod.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
                </div>
    )
}


export default Item;