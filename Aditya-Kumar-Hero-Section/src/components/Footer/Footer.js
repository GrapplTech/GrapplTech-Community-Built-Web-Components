import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer class="footer">
			<div class="footer-container">
				<div class="footer-section about">
					<h2>About Us</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce in interdum libero.
					</p>
				</div>
				<div class="footer-section links">
					<h2>Quick Links</h2>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div class="footer-section contact">
					<h2>Contact Us</h2>
					<ul>
						<li>Email: info@example.com</li>
						<li>Phone: (123) 456-7890</li>
						<li>Address: 123 Street, City, Country</li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom">
				<p>&copy; 2024 Your Company. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
