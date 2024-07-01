import React from 'react'
import  './Hero.css'
import Header from '../Header/Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='blur hero-blur'></div>
        <div className='left-h'>

            <Header/>

            <div className='the-best'>
                <div></div>
                <span>The Best Fitness Club in Town</span>
            </div>

            <div className='hero-text'>
                <div>
                    <span className='stroke-text '>shape</span>
                    <span> your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
            </div>

            <div>
                <span className='hi'>In here we will help you to shape and build your ideal body 
                    to live your life to the fullest</span>
            </div>

            <div className='figure'>
                <div>
                    <span className='first'>+140</span>
                    <span className='second'>expert coaches</span>
                </div>

                <div>
                    <span className='first'>+970</span>
                    <span className='second'>member's joined</span>
                </div>

                <div>
                    <span className='first'>+50</span>
                    <span className='second'>Fitness Programmes</span>
                </div>
            </div>

            <div className='hero-btn'>
                <button className='btn x'>Get Started</button>
                <button className='btn y'>Learn More</button>
            </div>

        </div>
        <div className='right-h'>

            <button className='btn'>Join Now</button>
        
            <div className='heart-rate'>
                <img src={Heart} alt=''/>
                <span className='at'>Heart Rate</span>
                <span className='bt'>114 bpm</span>
            </div>

            <img src={hero_image} alt='' className='hero-image'/>
            <img src={hero_image_back} alt='' className='hero-image-back'/>
            

            <div className='calories'>
                <img src={Calories} alt=''/>
                <div>
                <span>Calories Burned</span>
                <span>220Kcal</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero