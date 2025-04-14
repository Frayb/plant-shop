import React from 'react';
import {Link} from 'react-router-dom'
import { TbLeaf2,TbShoppingCart } from "react-icons/tb";


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div style={{ display: 'flex', alignment: 'center', gap: '8px' }}>
            <Link to = '/' className='logo'><TbLeaf2 size={40}/>
            </Link>
            <h1 className='company-name'> Paradise Nursery</h1>
            <div className='navbar-links'>
                <Link to = '/' className='nav-link'>Home</Link>
                <Link to = '/product' className='nav-link'>Product</Link>
                <Link to= '/about' className= 'nav-link'>About</Link>
                <Link to = '/cart' className='nav-link-cart'>
                    <TbShoppingCart size={34}/>
                    </Link>
                <div className='cart-counter'>3</div>
            </div>
        </div>
        </nav>

    );
};

export default Navbar;