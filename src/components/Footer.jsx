// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">FarmFresh Market connects local farmers with consumers, providing fresh produce directly from the source.</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Contact</h3>
          <p className="footer__text">Email: hadimp@gmail.com</p>
          <p className="footer__text">Phone: +91 9778062727</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__social-links">
            <a href="#" className="footer__social-link">Facebook</a>
            <a href="#" className="footer__social-link">Twitter</a>
            <a href="#" className="footer__social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2024 FarmFresh Market. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;