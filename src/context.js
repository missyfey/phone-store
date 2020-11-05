import React, { Component } from 'react'
import {createContext} from 'react'
import {storeProducts , detailProduct} from './data'

const productContext = createContext()

class ProductProvider extends Component {
    constructor(){
        super()
        this.state={
            products: [],
            detail: detailProduct,
            modalOpen:false, 
            cart:[],
            subtotal:0,
            tax:0,
            total:0
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData=()=>{
        let tempProducts =[]
        let singleP
        storeProducts.map(item=>{
            singleP = {...item}
            tempProducts = [...tempProducts , singleP]
        })

        this.setState({
            products: tempProducts
        })
    }
    handleAddCart=(id)=>{        
        this.setState({
            modalOpen:true,
        },
        this.addToCart(id))
    }
    addToCart=(id)=>{
        let tempProducts = this.state.products
        tempProducts.map(item =>{
            if(item.id===id){
                item.inCart = true
                item.count = 1
                item.total = item.price
            }
        })
        
        let selectedItem = this.getProduct(id)

        this.setState({
            products: tempProducts,
            cart:[...this.state.cart , selectedItem]
        }, this.addTotal)
    }
    
    getProduct=(id)=>{
        let clickedProduct = this.state.products.find(item=> item.id === id)
        return clickedProduct
    }

    handleDetail=(id)=>{        
        this.setState({
            detail: this.getProduct(id)
        })
    }
    closeModal=()=>{
        this.setState({
            modalOpen:false
        })
    }
    clearCart=()=>{
        this.getData()
        this.setState({
            cart:[]
        })
    }
    increment = (id)=>{
        let selectedItem = this.getProduct(id)
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(selectedItem)
        selectedItem = tempProducts[index]
        selectedItem.count++
        selectedItem.total = selectedItem.price * selectedItem.count
        this.setState({
            products: tempProducts
        },this.addTotal)
    }
    decrement = (id) =>{
        let selectedItem = this.getProduct(id)
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(selectedItem)
        selectedItem = tempProducts[index]
        if(selectedItem.count === 1){
            this.remove(id)
        }
        selectedItem.count--
        selectedItem.total = selectedItem.price * selectedItem.count
        this.setState({
            products: tempProducts
        },this.addTotal)
    }
    remove = (id)=> {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        let removeItem = tempProducts.find(item => item.id === id)
        removeItem.count=0
        removeItem.inCart = false
        removeItem.total = 0
        
        tempCart = tempCart.filter(item=> {return item.id !== id})
        this.setState({
            cart: tempCart,
            products:tempProducts
        }, this.addTotal)
    }
    getTotal = ()=>{
        let subtotal = 0
        this.state.cart.map(item => subtotal += item.total)
        let tax = parseFloat((subtotal * .12).toFixed(2))
        let total =(tax + subtotal).toFixed(2)
        
        return {tax, total, subtotal}
    }
    addTotal = ()=>{
        const totals = this.getTotal()
        let {total, subtotal, tax} = totals
        this.setState({
           total, subtotal, tax
        })
    }
    render() {
        return (
            <productContext.Provider value={{...this.state, 
            handleDetail:this.handleDetail, 
            handleAddCart:this.handleAddCart,
            closeModal:this.closeModal,
            clearCart:this.clearCart,
            decrement:this.decrement,
            increment: this.increment,
            remove:this.remove
            }}>
                {this.props.children}
            </productContext.Provider>
        )
    }
}

export {ProductProvider , productContext}