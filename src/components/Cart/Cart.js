import React, { Component } from 'react'
import {productContext} from '../../context'
import EmptyCart from './EmptyCart'
import CartColumn from './CartColumn'
import CartList from './CartList'
import Title from '../../components/Title'
import CartTotal from './CartTotal'
import PaypalButton from './PaypalButton'

export default class Cart extends Component {
    static contextType = productContext
    render() {
        const data = this.context
        let{cart, total,clearCart} = data
        total = Number(total)
        if(cart.length === 0){
            return <EmptyCart />
        }
        return (
            <div className="page-container">
                <section>
                    <Title title="Your Cart" />
                    <CartColumn/>
                    <CartList/>
                    <CartTotal />
                    <PaypalButton 
                    total={total} 
                    history={this.props.history}
                    clearCart ={clearCart}
                    />
                </section>
            </div>
        )
    }
}
