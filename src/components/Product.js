import React from 'react'
import {Link} from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function Product({product,handleAddCart, handleDetail}) {
    let {id,img, title, price,inCart} = product
    return (
        <div className="product-card">
            <div className="product-img">
                <Link to='/detail' onClick={()=>handleDetail(id)}>
                <img src={img} alt={title}/>
                </Link>
            </div>
            <div className="product-footer">
                <span>{title}</span>
                <span>${price}</span>
            </div>
            <button className="add-to-card-btn" 
            onClick={()=> handleAddCart(id)}
            disabled={inCart}
            >
                {inCart ? 'In Cart': <FaCartPlus />}
            </button>
        </div>
    )
}
Product.propTypes = {
    product: PropTypes.shape({
        price:PropTypes.number,
        inCart: PropTypes.bool,
        title: PropTypes.string,
        img:PropTypes.string
    })
}