import React, {useState} from 'react'
import { FaRegAddressCard, FaMapMarkerAlt, FaSignOutAlt  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Popup from '../Popup/Popup'
import './Navbar.css'

function Navbar({ logout }) {
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

  const handleLogout = () => {
    logout();
  }

  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  }

  const handleHome = () => {
    navigate("/")
  }

  return (
    <>
    <header>
        <nav>
            <div className='logo' onClick={handleHome}>
                <h1>Frederik Janssen</h1>
                <p>Made with &#10084;&#65039; in HH</p>
            </div>
            <ul className={active}>
              <li className='listitems listitembutton' onClick={handleContact}>
                <FaRegAddressCard/>Contact
              </li>
              <li className='listitems listitembutton' onClick={enablePopup}>
                <FaMapMarkerAlt/>New Location
              </li>
              <li className='listitems listitembutton' onClick={handleLogout}>
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