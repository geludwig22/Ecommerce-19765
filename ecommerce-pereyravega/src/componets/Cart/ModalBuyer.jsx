import React, { useState } from "react";
import { useCartContext } from '../Context/CartContext';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";



const ModalBuyer = ( {data, total, errorValue, id} ) => {
  const {setCartList} = useCartContext ()   
  const [modal, setModal] = useState(false);
 const toggle = () => { setModal(!modal);}
 const cleanCart = () => { setCartList([]);}
 console.log(errorValue)
 
  
return (
        
    <div style={{ textAlign: "center" }}>
      <Button type='submit' onClick={toggle}>Finalizar Compra</Button>
      <Modal size="m" isOpen={modal} toggle={toggle}>
        <ModalHeader className='card-header'>Orden de compra</ModalHeader>
        <ModalBody style={{ height: "65vh" }}>
          
          <div>
          {errorValue? <><h2>No ha completado todos los datos</h2> <img className='w-50' src="https://static.vecteezy.com/system/resources/previews/002/306/712/original/warning-symbol-sign-vector.jpg" alt="" srcset="" /> <h3>¡Vuelva a intentarlo!</h3></> :
              <><h2> ¡Gracias por su compra {data.name}! </h2><img className='w-50' src="https://c.tenor.com/WYKoRh1NGPEAAAAd/truck-delivery.gif" alt="" srcset="" /><h3> Su pago por: $ {total} ya está realizado</h3><h4> Su ID de compra es: {id} </h4><h4>En unos dias recibirá su pedido</h4></>}
          </div>
        </ModalBody>
        <ModalFooter className='card-footer'>
          {errorValue?  <Button color="success" onClick={toggle}>
            OK
          </Button> :  <Button color="success" onClick={toggle, cleanCart}>
            OK
          </Button>}
         
        </ModalFooter>
      </Modal>
    </div>
  );
};
 
export default ModalBuyer;