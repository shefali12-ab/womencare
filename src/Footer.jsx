import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css"
import facebooklogo from './Images/facebook.png'
import instagramlogo from './Images/instagram.png'
import linkdinlogo from './Images/linkedin.png'
 function Footer()
 {
    return(
        <div className='footer'>
         <a href='#'>   <img src={facebooklogo}></img></a> 
           <a href='#'><img src={instagramlogo}></img></a> 
           <a href='#'><img src={linkdinlogo}></img></a> 
            <p> © Healthify Moms. All Rights Reserved.</p>

        </div>
    )
 }
  export default Footer;