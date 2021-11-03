import React, { Fragment } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greetings}) => {
    
    return (
        <Fragment>
        <h2>{greetings}</h2>
        <ItemCount initial={0} stock={5}/>
        </Fragment>
        );
}

export default ItemListContainer;
