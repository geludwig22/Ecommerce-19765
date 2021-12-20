import React from 'react'
import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import FormBuyer from './FormBuyer'


export const Cart = () => {

  
  
    const { CartList, borrarCarrito, borrarItem, cartTotal} = useCartContext ()
    console.log (CartList)
    return (
      <div>
        {CartList.length === 0 ? (
          <>           
            <p>
              Carrito Vacio
            </p>
            <div>
              <Link to="/">
                <button className="buttonCount mt-5">
                  Seleccione un producto
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="cartContent container">
              <table>
                <tr className="headerTable">
                  <td> </td>
                  <td>Nombre</td>
                  <td>Cantidad</td>
                  <td className="pl-5 pr-5">Precio</td>
                  <td>Subtotal</td>
                  <td>Borrar item</td>
                </tr>
                {CartList.map((prod) => (
                  <tr className="" key={prod.id}>
                    <td>
                      <img className="fotoCart" src={prod.thumbnailUrl} alt="" />
                    </td>
                    <td className="prodName">{prod.nombre}</td>
                    <td>{prod.cantidad}</td>
                    <td>$ {prod.precio} </td>
                    <td> $ {prod.subtotal} </td>
                    <td>
                      <a>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={() => {
                            borrarItem(prod.id);
                          }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}

                <tr className="totalCountContainer">
                    <td className="totalCount">
                    <p> Total a pagar </p>
                    <p> $ {cartTotal} </p>
                  </td>
                  <td className="pr-5">
                    Borrar Carrito
                    <a className="btnTrash">
                      {" "}
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={borrarCarrito}
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <FormBuyer />
          </>
        )}
      </div>
    );
}
