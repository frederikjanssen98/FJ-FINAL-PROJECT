import React, {useState} from 'react'
import { FaRegAddressCard, FaMapMarkerAlt, FaSignOutAlt  } from "react-icons/fa";
import Popup from '../Popup/Popup'
import './Navbar.css'

function Navbar() {
  const [active, setActive] = useState('menuitems');
  const menuToggle = () => {
    active === 'menuitems' ? setActive('menuitems_active') : setActive('menuitems');
  }

  const [togglePopup, setTogglePopup] = useState(false);
  const enablePopup = () => {
    setTogglePopup(true);
  }
  const disablePopup = () => {
    setTogglePopup(false);
  }

  return (
    <>
    <header>
        <nav>
            <div className='logo'>
                <h1>Frederik Janssen</h1>
                <p>Made with &#10084;&#65039; in HH</p>
            </div>
            <ul className={active}>
              <li className='listitems listitembutton'>
                <FaRegAddressCard/>Contact
              </li>
              <li className='listitems listitembutton' onClick={enablePopup}>
                <FaMapMarkerAlt/>New Location
              </li>
              <li className='listitems listitembutton'>
                <FaSignOutAlt/>Logout
              </li>
            </ul>
            <div className='burgeritem' onClick={menuToggle}>
              <div className='burgeritemone'></div>
              <div className='burgeritemtwo'></div>
              <div className='burgeritemthree'></div>
            </div>
        </nav>
    </header>
    <Popup active={togglePopup} function={disablePopup}/>
    </>
  )
}

export default Navbar