import React from 'react'
import {Link} from 'react-router-dom'
import {productContext} from '../context'
import {useContext} from 'react'
import {StyledButton} from './Button'

export default function Modal() {
    const allContext = useContext(productContext)
    let{modalOpen ,detail,closeModal} = allContext

    if(!modalOpen){
        return null
    }
    return (
        <div className="modal-container">
            <div className="modal-wrapper">
                <h3>Item Added To The Cart</h3>
                <img src={detail.img} alt={detail.title} />
                <h4>{detail.title}</h4>
                <h4 className="modal-price">Price: {detail.price}</h4>
                <div className="modal-links">
                <Link to='/'>
                    <StyledButton onClick={closeModal}>Store</StyledButton>
                </Link>
                <Link to='/cart'>
                    <StyledButton cart onClick={closeModal}>Go To Cart</StyledButton>
                </Link>
            </div>
            </div>
            
        </div>
    )
    
}
