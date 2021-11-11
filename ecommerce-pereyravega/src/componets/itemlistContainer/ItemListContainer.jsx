import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getFetch } from "../Services/getFetch";
import ItemList from "./ItemList"





const getItem = new Promise((res) => {
    setTimeout(() => {
        res(products)
    }, 2000);
});


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch //llamada a una api
    .then(res => {
        setProducts(res) //devuelve un array con productos
    }
    )
    
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    }, [])


    


    return (
        <>
        <h2>{greetings}</h2>
        
        { loading ? <h2>Cargando...</h2> :
        <ItemList products={products} />
        
        }

        <ItemCount initial={0} stock={5}/>

        </>

       
        );
}











export default ItemListContainer;
