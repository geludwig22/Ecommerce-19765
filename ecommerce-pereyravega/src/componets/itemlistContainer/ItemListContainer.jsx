import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getFetch } from "../Services/getFetch";
import ItemList from "./ItemList"



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            getFetch
                .then(res => setProducts(res.filter(prod => prod.estado === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
             getFetch
                 .then(res => setProducts(res))
                 .catch(err => console.log(err))
                 .finally(() => setLoading(false))
            
        }

       
    },[id] )


      return (
        <>
        
        
        { loading ? <h2>Cargando...</h2> :
        <ItemList products={products} />
        
        }

        <ItemCount initial={0} stock={5}/>

        </>

       
        );
}











export default ItemListContainer;
