import React from 'react'
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="container">
        <hr />

        <div className="content">
            <div>
                <img src="/logo.png" alt="Image of the logo" className='logo-img'/>
            </div>
            <div>
                <h4>Quick Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Appointment</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>link 2</li>

                </ul>
            </div>
            <div>
                <h4>Hours</h4>
                <ul>
                    <li>Monday-Friday : 10 am to 5pm </li>
                    <li>Saturday:  10 am to 2 pm</li>
                    <li>Sunday : Holiday </li>
                </ul>
            </div>
            <div>
                <h4>Contact </h4>
                <div>
                    <FaPhone />
                    <span><a href='tel:123456789'>123456789</a></span>
                </div>
                <div>
                    <MdEmail />
                    <span><a href='mailto:aaravmody1@gmail.com'>aaravmody1@gmail.com</a></span>
                </div>
                <div>
                    <FaLocationArrow />
                    <span>Mumbai</span>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer