import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are an e-commerce platform offering the best products at the best prices. Shop with us for quality and convenience.</p>
        </div>

        {/* Customer Service Section */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zuko. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
