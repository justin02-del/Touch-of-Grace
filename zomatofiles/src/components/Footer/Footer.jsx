import React from 'react'
import './footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footerContent'>
            <div className="footerContentLeft">
                <img src={assets.logo} alt="" />
                <p>
                    loremipsum
                </p>
                <div className="footerSocialIcons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footerCenter">
                <h2>
                    COMPANY
                </h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="footerContentRight">
                <h2>
                    GET IN TOUCH
                </h2>
                <ul>
                    <li>+27 450759249</li>
                    <li>contact@zomato.com</li>
                    
                </ul>

            </div>
            
        </div>
        <hr />
        <p className='footerCopyright'>
            copyright
        </p>


    </div>
  )
}

export default Footer