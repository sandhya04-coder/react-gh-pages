
import React from 'react';
import './Footer.css';
import gpt3logo from '../../assets_gpt/logo.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'> Do You Want To Step Into The Future Before Others !</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
            <img src={gpt3logo} alt="logo" />
            <p>Beyond intelligence, into imagination.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4> Links </h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Email</p>
          <p>Handles</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4> Company </h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Authentication</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4> Get in touch </h4>
          <p>LinkedIn</p>
          <p>Email</p>
          <p>contact</p>
        </div>
      
      </div>
      <div className='gpt3__footer-copyright'>
          <p>* GPT-3 ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer;