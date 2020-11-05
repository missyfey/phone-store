import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {productContext} from '../context'
import Title from './Title'
import {StyledButton} from './Button'

export default function Detail() {
    const getContext = useContext(productContext)
    const {handleAddCart} = getContext
    let {title, img,id,inCart, info, price, company} = getContext.detail

    return (
        <div className="page-container">
            <section>
                <Title title={title}/>
                <div className="detail-wrapper">
                    <div className="detail-img">
                        <img src={img} alt={title}/>
                    </div>
                    <div className="detail-content">
                        <h3>Model: {title}</h3>
                        <h4>Made by: {company}</h4>
                        <h5>Price: ${price}</h5>
                        <p>Some info about product:</p>
                        <p className="detail-info">{info}</p>

                        <div className="detail-links">
                            <Link to='/'>
                                <StyledButton>back to products</StyledButton>
                            </Link>
                            
                                <StyledButton 
                                disabled={inCart}
                                cart
                                onClick={()=> handleAddCart(id)}
                                >{inCart? 'In Cart' : 'Add To Cart'}</StyledButton>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
