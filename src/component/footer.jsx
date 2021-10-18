import React from 'react';
import "../scss/Homepage/footer.scss";
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import NFTlogo from '../assets/nft-logo.png'


export default function Footer() {
    return (
        <>
            <div className="footer-container container">
                <div className="group-1">
                    <h1><img src={NFTlogo} id="logo" alt="" />yourlogo</h1>
                    <h3>The New Creative Economy.</h3>
                </div>
                <div className="group-2">
                    <ul className="about">
                        <li>About</li>
                        <li>About Us</li>
                        <li>Terms of Service </li>
                        <li>Privacy Policy</li>
                        <li>FAQs</li>
                    </ul>
                    <ul className="contact">
                        <li>CONTACT US</li>
                        <li><i className="fa fa-envelope-o" aria-hidden="true"></i>support@nftify.com</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i>(+84) 123 456 789</li>
                    </ul>
                </div>
                <div className="group-3">
                    <h1>Social Media</h1>
                    <ul className="social-media">
                        <li><img alt="" src={twitter} className="social-media-item twitter" /></li>
                        <li><img alt="" src={discord} className="social-media-item twitter" /></li>
                        <li><img alt="" src={telegram} className="social-media-item twitter" /></li>
                        <li><img alt="" src={instagram} className="social-media-item twitter" /></li>
                    </ul>
                </div>
            </div>
            <div className="copy-right container">
                © Copyright [Store name]. All Rights Reserved.
            </div>
        </>
    )
}