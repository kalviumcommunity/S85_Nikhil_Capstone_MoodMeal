import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="MoodMeal Logo" className="logo" />
        <ul className="navbar-menu">
            <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link></li>
            <li><a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a></li>
            <li><a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a></li>
            <li><a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a></li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon">
                <div className="basket-container">
                    <img src={assets.basket_icon} alt="Basket" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    </div>
  )
}
 
export default Navbar