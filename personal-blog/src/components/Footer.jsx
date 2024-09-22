import React from 'react'
import Logo from '../assets/Minouch-Logo.png';
import './Footer.css'
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="Logo" />
        
        <div className="social-links">
          <a className="social-button" href="https://www.instagram.com/nbamethyst/" target="_blank" rel="noopener noreferrer">
            <i className='fa-brands fa-instagram' />
            <span className='social-name'>Instagram</span>
          </a>  
          <a className="social-button" href="https://www.linkedin.com/in/nadine-bousdjira/" target="_blank" rel="noopener noreferrer">
            <i className='fa-brands fa-linkedin' />
            <span className='social-name'>LinkedIn</span>
          </a>  
          <a className="social-button" href="https://github.com/NadineBSD" target="_blank" rel="noopener noreferrer">
            <i className='fa-brands fa-github' />
            <span className='social-name'>GitHub</span>
          </a>  
        </div>
        <div className="contact-details">
            <div className="contact-item">
                <i class="fa-solid fa-envelope" aria-hidden="true"/>
                <p className='contact-info'>nadinebsd@outlook.com</p>
            </div>
            <div className="contact-item">
                <i class="fa-brands fa-discord" aria-hidden="true"/>
                <p className='contact-info'>nanibsd</p>
            </div>
        </div>

        <hr className='footer-line'/>
        <p className="footer-copyright">© 2024 Nadine Bousdjira. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer;
