import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import insta_icon from '../../assets/insta_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I'm Full Stack Web developer, as well as software tester </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">CONNECT</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"> &copy; 2024 Anmol Raj, All rights reserved. <br />
                    <img src={linkedin_icon} alt="" />
                    <img src={github_icon} alt="" />
                    <img src={insta_icon} alt="" />
                </p>
                <div className="footer-bottom-right">
                    <p>Term & Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact Me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
