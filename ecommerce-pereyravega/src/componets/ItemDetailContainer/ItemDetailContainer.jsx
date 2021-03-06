import {useState, useEffect} from 'react';
import {ItemDetail} from './ItemDetail'
import {useParams} from 'react-router-dom'
import { useCartContext } from '../Context/CartContext';
import { getFirestore } from '../Services/getFirestore';

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState ({})
    const [loading, setLoading] = useState (true)
    const [addCart, setAddCart] = useState (true)
    const [count, setCount] = useState (0)
    const {detailID} = useParams();



    useEffect (() => {
        const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .doc(detailID)
      .get()
      .then((resp) => setProductos({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detailID]);

    
    const {CartList, agregarCarrito} = useCartContext () 
        
   
    const onAdd = (cant) => {
        setCount (cant)
        setAddCart(false);
        agregarCarrito({...productos, cantidad: cant})
    }
    
    return (
        <div>
            { loading ? <div class="spinner-border text-light" role="status">
  <span class="sr-only">Cargando...</span> 
</div>   :  <ItemDetail prod={productos} onAdd={onAdd} state= {addCart} />
                
        
    }

        
        </div>
    )
}
