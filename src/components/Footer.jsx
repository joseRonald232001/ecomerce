import React from 'react';
import '../styles/footer/Footer.css'

const Footer = () => {
  return (

    <div className='footer'>
      <div className='footer__contex'>
        <div className='footer__info'>
          <p>Jose Ronald</p>
          <div className='footer__icons'>
            <a 
              href="https://www.linkedin.com/in/jose-ronald-pe%C3%B1a-hidalgo-a481a923b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target={"_blank"}>
              <i className="fa-brands fa-linkedin-in icons"></i></a>         
            <a 
              href="https://github.com/joseRonald232001" target={"_blank"}>
              <i className="fa-brands fa-github icons"></i></a>         
            <a 
              href="mailto:phjronald@gmail.com">
              <i className="fa-solid fa-envelope icons"></i></a>   
            <a 
              href="https://wa.me/59167512034">
              <i className="fa-solid fa-phone icons"></i></a>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;