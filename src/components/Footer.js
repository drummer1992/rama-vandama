import React from 'react'

export const Footer = () => (
  <footer className="footer bg-secondary">
    <div className="social">
      <a href="https://www.facebook.com/profile.php?id=100025445531934">
        <i className="fab fa-facebook fa-2x"/>
      </a>
      <a href="https://www.instagram.com/ramavandama/">
        <i className="fab fa-instagram fa-2x"/>
      </a>
    </div>
    <p>Copyright &copy; {new Date().getFullYear()} - Rama Вандама</p>
  </footer>
)