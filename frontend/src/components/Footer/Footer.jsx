import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <p>Pair has made cutting-edge personal technology accessories accessible and affordable for young Indian consumers. pAir emerged as the largest Indian seller of wireless accessories in future.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9191889188</li>
                <li>businesspAir@gmail.com</li>
                <li></li>
            </ul>

        </div>
      </div>
      <hr />
      <p className="Footer-copyright">Copyright © 2024 <a href="https://www.linkedin.com/in/arpitsn11/" target="_blank">Arpit Saxena</a> India,Inc. all rights reserved.</p>
    </div>
  )
}

export default Footer
