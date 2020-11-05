import React from 'react'
import {useContext} from 'react'
import {productContext} from '../context'
import Title from './Title'
import Product from './Product'

export default function ProductList() {
    const list = useContext(productContext)
    let {products} = list
    products = products.map(product=>{
        return <Product key={product.id} 
        product={product} 
        handleAddCart={list.handleAddCart}
        handleDetail = {list.handleDetail}
        />
    })
    return (
        <div className="page-container product-list-page">
            <section>
                <Title title='Our Products' />
                <div className="product-wrapper">
                    {products}
                </div>
            </section>
        </div>
    )
}
