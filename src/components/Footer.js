import React from 'react'

export const Footer = () => (
  <footer className="footer bg-secondary">
    <div className="social">
      <a href="https://instagram.com/vmfilms.prod">
        <i className="fas fa-video fa-2x"/>
      </a>
      <a href="https://www.instagram.com/ramavandama/">
        <i className="fab fa-instagram fa-2x"/>
      </a>
    </div>
    <p>Copyright &copy; {new Date().getFullYear()} - Rama Вандама</p>
  </footer>
)