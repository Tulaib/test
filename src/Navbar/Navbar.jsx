import React, { useState } from 'react'
import './nav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import SideBar from '../Compo/SideBar'
function Navbar() {


  const [showIcons,setshowIcons] =useState(false)
  return (
    <header>
        <nav className='navbar-container'>
            <div className='logo'>
            <a href=''>D G</a>
            </div>
              <div className={ showIcons === true ? 'mobile-menu-item ': 'menu-item'}>
              <ul>
                <li><a href="#home">Home</a> </li>
                <li><a href="">Services</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="">Contact</a> </li>
              </ul>
            </div>
            {/* } */}
            
            <div className='button'> 
              <button className='button-39'>
                SIGN IN
              </button>
              <div className="hamburger-icon">
                <a href='#' onClick={()=>setshowIcons(!showIcons)}>
              <GiHamburgerMenu />
                </a>
              </div>
            </div>

        </nav>
    </header>
  )
}

export default Navbar