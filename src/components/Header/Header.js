import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import auth from '../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        
            
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">orders</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/about">About</Link>
               {user? <button>Signout</button> : <Link to='/login'>Login</Link>} 
            </div>
        </nav>
    );
};

export default Header;