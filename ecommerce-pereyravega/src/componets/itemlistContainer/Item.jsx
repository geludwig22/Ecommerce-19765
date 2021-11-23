import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({prod}) => {
    return (
        <div className='col-md-4'>                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.nombre} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.thumbnailUrl} alt='' className='w-50' />
                    {prod.precio}                                                            
                </div>
                <div className="card-footer">
                        <Link to={`/detail/${prod.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle del producto
                            </button>
                        </Link>
                        <a href="#" class="btn btn-primary">Comprar</a>                                                            
                </div>
            </div>
        </div>

    )
}


export default Item;