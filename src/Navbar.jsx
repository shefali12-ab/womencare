import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './Images/healthify1.png'
import "./App.css"

function Navbar(){
    return (
        <nav className='navbar'>
            <div className='logo'>
                 <img src={Logo} className='navbar-logo'></img> 
                 
            </div>
            <div className='navbar-links'>
                <ul>
                    <li> <a href='#'>About</a></li>
                    <li> <a href='#'> Our Service</a></li>
                    <li> <a href='#'> LogIn</a></li>
                    <button className='dashbord-btn'> Dashboard</button>
                </ul>
                
            </div>
           
        </nav>
        
    )
}
export default Navbar;