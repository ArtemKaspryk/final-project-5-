import React from 'react';
import SignUp from './SignUp';
import './HeaderStyles.css'
import logo from '../../assets/headerLogo.png'

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="" className='logo'/>
            <nav className='nav'>
                <a href="#">Who we are</a>
                <a href="#">Contacts</a>
                <a href="#">Menu</a>
            </nav>
            <div>
                <SignUp />
            </div>
        </header>
    );
}

export default Header;
