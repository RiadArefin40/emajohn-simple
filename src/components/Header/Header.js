import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        
            
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">Shop</a>
                <a href="">orders</a>
                <a href="">inventory</a>
                <a href="">About</a>
            </div>
        </nav>
    );
};

export default Header;