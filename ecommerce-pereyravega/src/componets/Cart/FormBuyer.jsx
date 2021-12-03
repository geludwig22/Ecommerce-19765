import React, {useState} from 'react'
import {getFirestore} from '../Services/getFirestore';
import firebase from 'firebase';
import ModalBuyer from './ModalBuyer'
import { useCartContext } from '../Context/CartContext'



const FormBuyer = () => {
    const { CartList, cartTotal} = useCartContext ()

    const [formData, setFormData] = useState ( {
        name: '',
        email: '',
        phone: '',
  
      } ) 
      const [error, guardarError] = useState (false)
      const [orderId, setOrderId] = useState ()

    const generarOrden = (e) => {
        e.preventDefault()
        if (formData.email.trim() === '' || formData.name.trim() === '' || formData.phone.trim()=== '') {
          guardarError(true)
          return;
        } else {
        guardarError(false)
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer = formData
        orden.total = cartTotal
        orden.items = CartList.map (cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.nombre;
          const precio = cartItem.subtotal;
          return {id, nombre, precio}
        } )

        const dbQuery = getFirestore ()
        dbQuery.collection ('orders').add(orden)
        .then(({id} ) => { 
          setOrderId(id)  })
        .then(resp => console.log(resp))
        .catch (err=> console.log (err))   
            console.log (orderId)
  }}

    const handleChange = (e) => { setFormData ( {...formData,[e.target.name]: e.target.value})}

    return ( 
        <>
            <div className="container formContainer col-lg-3">
                {error? <p className='btn-danger'>Todos los campos son obligatorios</p> : null}
                <form className="d-flex flex-column container pt-5 pb-5 formContainer" 
                onSubmit={generarOrden} onChange={handleChange}>
                  <div className='form-group'>
                    <input className="form-control" type="text" name="name" placeholder="Nombre" 
                    value={formData.name}></input>
                  </div>
                  <div className='form-group'>
                    <input className="form-control" type="text" 
                    name="phone" placeholder="Teléfono"value={formData.phone}></input>
                  </div>
                  <div className='form-group'>
                    <input className="form-control" type="text" 
                    name="email" placeholder="E-mail" value={formData.email}></input>
                  </div>
                  <div>
                    <ModalBuyer data= {formData} total= {cartTotal} errorValue= {error} id= {orderId} /> 
                  </div>
                </form>
              </div>
        
        </>
     );
}
 
export default FormBuyer;