import React from 'react'
import CartItem from './CartItem'
import {useContext} from 'react'
import {productContext} from '../../context'

export default function CartList() {
    const cartContext = useContext(productContext)
    let {cart, increment,decrement, remove} = cartContext
    
    const cartList = cart.map((item , index)=>{
        return <CartItem key={index}
         product={item}
         increment = {increment}
         decrement = {decrement}
         remove={remove}
         />
    })
    return (
        <div>
            {cartList}
        </div>
    )
}
