import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail  from '../ItemDetailContainer/ItemDetail';
// import '../App.css'
import { getFetch } from '../Services/getFetch';



// const getItem = new Promise((res) => {
//     setTimeout(() => {
//         res(products)
//     }, 2000);
// });

const ItemDetailContainer = () => {

    const [item, setItem] = useState();

    const [loading, setLoading] = useState(true);

    const { prodID } = useParams(); 


    useEffect(() => {
        if(prodID){
            getFetch
                .then(res => {
                    setItem(res.find(x => x.id === parseInt(prodID)))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else{
            getFetch
                .then(res => {
                    setItem(res)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false)) 
        }
    },[prodID]);



    return (
        <div className="modals">
        {
            loading 
            ? 
                <div style={{ textAlign: "center" }}></div>
            : 
                <ItemDetail prod={item}/>
        }
        </div>
    )
}

export default ItemDetailContainer;



