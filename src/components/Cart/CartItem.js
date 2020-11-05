import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

export default function CartItem({product,increment, decrement, remove}) {
    let {img, price, title, total, count,id} = product
    return (
        <div className="product-item-wrapper">
            <img src={img} alt={title} />
            <p><span className="hidden">Product: </span>{title}</p>
            <p><span className="hidden">Price: </span>${price}</p>
            <div className="quantity-box">
                <span onClick={()=> decrement(id)}>-</span>
                <span>{count}</span>
                <span onClick={()=> increment(id)}>+</span>
            </div>
            <FaTrashAlt className="trash-icon" onClick={()=> remove(id)}/>
            <p><b>Item Total: ${total}</b></p>
        </div>
    )
}
