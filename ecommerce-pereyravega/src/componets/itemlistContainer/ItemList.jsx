import React from 'react'
import { Item } from './Item'

export const ItemList = ({products}) => {
    return (
        <div className='container'>
            <div className="row" dataMansory={{percentPosition: true}}>
            { products.map(prod => <Item prod={prod} key={prod.id} />) }
            </div>
        
        </div>
    )
}


export default ItemList;