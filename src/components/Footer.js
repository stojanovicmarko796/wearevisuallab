import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';
import logo from '../images/logo.jpg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
          <p className="footer-subscription-heading">
              Contact us and let's start out journey together
          </p>
          <p className="footer-subscription-text">
              You can leave your email and we can contact you as well
          </p>
          <div className="input-areas">
              <form>
                  <input type="email" name="email" placeholder="Your email"
                  className="footer-input"/>
                  <Button buttonStyle='btn--outline'>Submit</Button>
              </form>
          </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/wearevisuallab/' disabled="true">Instagram</a>
            <a href='https://www.facebook.com/wearevisuallab' disabled="true">Facebook</a>
            <a href='https://www.linkedin.com/company/we-are-visual-lab/about/' disabled="true">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class="social-media">
          <div className="social-media-wrap">
              <div className="footer-logo">
                  <Link to="/" className="social-logo">
                  <img src={logo} className="App-logo" alt="logo"></img>
                  </Link>
              </div>
              <small className="website-rights">VL © 2022</small>
              <div className="social-icons">
                  <a 
                    className="social-icon-link facebook"
                    href='https://www.facebook.com/wearevisuallab'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Facebook'
                  >
                      <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="social-icon-link instagram"
                    href='https://www.instagram.com/wearevisuallab/'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Instagram'
                  >
                      <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    class='social-icon-link linkedin'
                    href='https://www.linkedin.com/company/we-are-visual-lab/about/'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='LinkedIn'
                  >
                      <i class='fab fa-linkedin' />
                  </a>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Footer

