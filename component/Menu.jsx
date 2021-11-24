import React from 'react';
import data from './data/data.json';
import bug from '../assents/chincheta.png';
import { Pedido } from './Pedido';
import { KitchenButton } from './KitchenButton';

export default function Menu({ name, table, compra: purchase, setCompra: setPurchase, total }) {

    const purchaseSummary = (identifier, name, price) => {
        if (purchase.length === 0) {
            setPurchase([{ id: identifier, name: name, price: price, count: 1 }])

        }
        else {
            const auxPurchase = [...purchase]
            const bought = auxPurchase.filter((purchasedProduct) => {
                return purchasedProduct.id === identifier
            })

            if (bought.length > 0) {
                auxPurchase.forEach((product, index) => {
                    if (product.id === identifier) {
                        const cantidad = product.count
                        const precio = product.price
                        auxPurchase[index] = { id: identifier, name: name, price: precio + (precio / cantidad), count: cantidad + 1 }

                        setPurchase(auxPurchase)
                    }
                })
            }
            else {
                auxPurchase.push({ id: identifier, name: name, price: price, count: 1 })
                setPurchase(auxPurchase)
            }
        }
    }
    return (
        <div className='menuAndAbstract'>
            <div>
                <ul>
                    {
                        data.map(item => (
                            <div key={item.id}>
                                <button
                                    className='imgMenuOne'
                                    onClick={() => purchaseSummary(item.id, item.name, item.price)}
                                >
                                    <img src={item.img} alt='menu' width='125' />{item.name} {item.price}</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
            {
                <div className='abstract'>
                    <img className='bug' src={bug} alt="bug" />
                    <h1 className='orderSummary'>Resumen del pedido</h1>
                    <p className='orderData'>{name} {table}:</p>
                     <ul>
                        {
                            purchase.length > 0 ?
                                purchase.map((producto, index) => {
                                    return (
                                        <Pedido
                                            key={index}
                                            producto={producto}
                                        />
                                    )
                                })
                                :
                                <p className='orderData'>No hay producto comprado</p>
                        }
                        <p className='orderTotal'>Total:{total(purchase)}$</p>
                        
                    </ul>
                    <KitchenButton />
                </div>
            }
        </div>
    )

}




























