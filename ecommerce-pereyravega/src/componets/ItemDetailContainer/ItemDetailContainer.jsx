import React, { useEffect, useState } from 'react'
import ItemDetail  from '../ItemDetailContainer/ItemDetail';
import { getFetch } from '../Services/getFetch';



const ItemDetailContainer = () => {

    const [prod, setProd] = useState({});

    const [loading, setLoading] = useState(true);

    


    useEffect(() => {
    getFetch
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProd(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))       
    },[]) 
      
    console.log(prod);

    return (
        <>
            {loading ? 
                    <h2>Cargando...</h2>
                :
                    <div className='border border-3 border-secondary'>
                        <ItemDetail prod={prod} />                        
                    </div>
            }
        </>
    )

}

export default ItemDetailContainer;



