import React from 'react'
import {Link} from 'react-router-dom'
import {FaCanadianMapleLeaf , FaCartPlus} from 'react-icons/fa'
import {StyledButton} from './Button'

export default function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className="nav-header">
                    <FaCanadianMapleLeaf className="nav-logo"/>
                </div>
                <div className="nav-links">
                    <Link to='/'>Products</Link>
                    <Link to='/cart'>
                        <StyledButton><FaCartPlus className="cart-in-btn"/>My cart</StyledButton>
                    </Link>
                </div>
            </div>
        </nav>
    )
}


