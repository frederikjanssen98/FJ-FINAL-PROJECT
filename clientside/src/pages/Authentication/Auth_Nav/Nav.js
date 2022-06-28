import React from 'react'
import { FaRegAddressCard } from "react-icons/fa";
import './Nav.css'

function Nav() {
  return (
    <>
    <header>
        <nav>
            <div className='logo'>
                <h1>Frederik Janssen</h1>
                <p>Made with &#10084;&#65039; in HH</p>
            </div>
            <ul>
              <li className='listitems listitembutton'>
                <FaRegAddressCard/>Contact
              </li>
            </ul>
            <div className='burgeritem'>
              <div className='burgeritemone'></div>
              <div className='burgeritemtwo'></div>
              <div className='burgeritemthree'></div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Nav