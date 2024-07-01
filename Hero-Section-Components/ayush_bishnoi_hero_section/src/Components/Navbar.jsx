import React from 'react';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {

    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a href="">
                <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button">Bookings Now</button>
             </div>
        </nav>
    )
}

export default Navbar;