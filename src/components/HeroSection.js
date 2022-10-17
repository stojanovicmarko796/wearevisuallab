import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src={require('../videos/video-1.mp4')} autoPlay loop muted width={null} height={null} resizeMode='contain'/> */}
      {/* <h1>Coming soon</h1> */}
      {/* <p>What are you waitting for?</p> */}
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
        
      </div>
    </div>
  )
}

export default HeroSection;
