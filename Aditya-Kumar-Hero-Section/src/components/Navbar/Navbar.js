import React from "react";
import "./navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-left">
				<img
					src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2dyYXBwbHRlY2guanBn.webp"
					alt=""
					className="logo"
				/>
				<span className="name">ease</span>
			</div>
			<div className="nav-right">
				<ul className="navlinks">
					<li>Products</li>
					<li>About</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
			</div>
			<div>
				<Button name="SIGN UP" />
				<Button name="LOGIN" />
			</div>
		</div>
	);
};

export default Navbar;
