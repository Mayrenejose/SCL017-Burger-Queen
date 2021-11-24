import React from 'react';


export const Pedido = ({producto}) => {
    return (
        <React.Fragment>
            <li>
                <p>{producto.count}  {producto.name} {producto.price}$</p>
               
            </li>
            
            
            </React.Fragment>
    )
}
