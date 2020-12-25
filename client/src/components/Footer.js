import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return ( 
    <footer className='footer'>
      <div className="footer__contents">
        <div className="footer__developed-by">
          <p>Developed & Designed by Yuka Moribe</p>
          <div className="footer__icon-container">
              <a target="_blank" href="https://github.com/smilelk4">
                <GitHubIcon />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/yuka-moribe-485962157/">
                <LinkedInIcon />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;