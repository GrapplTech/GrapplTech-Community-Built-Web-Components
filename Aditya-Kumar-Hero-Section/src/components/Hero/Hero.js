import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import typing from "../../assets/typing.png";

const Hero = () => {
	return (
		<div className="hero-container ">
			<div className="LandingPage-left">
				<h1 className="Landing-header">
					Move faster with intuitive React UI tools
				</h1>
				<div className="typewriter-container">
					<Typewriter // This Typewriter is use for animating  these{['Fast?', 'Correct?','Quick?']}
						options={{
							strings: ["Fast?", "Correct?", "Quick?"],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="LandingPage-right">
				<img src={typing} alt="" className="typing-img" />
			</div>
		</div>
	);
};

export default Hero;
