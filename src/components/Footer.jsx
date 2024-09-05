import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p>Follow me on social media:</p>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <p className="mt-3">&copy; 2024 NewsMug. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
