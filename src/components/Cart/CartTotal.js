import React from 'react'
import {useContext} from 'react'
import {productContext} from '../../context'
import {ClearButton} from '../../components/Button'

export default function CartTotal() {
    const cartContext = useContext(productContext)
    let {subtotal, total, tax,clearCart} = cartContext
    return (
        <div className="cart-total-container">
            <div className="cart-total-wrapper">
                <ClearButton onClick={clearCart}>Clear cart</ClearButton>
                <p>SUBTOTAL: ${subtotal}</p>
                <p>TAX: ${tax}</p>
                <p>TOTAL: ${total}</p>
            </div>
        </div>
    )
}
