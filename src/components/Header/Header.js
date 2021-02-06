import React, { useEffect, useState } from 'react'
import backgroundImage from './DSC_0098.jpg'

const navBarItems = [
  { to: '#home', title: 'Головна', exact: true },
  { to: '#about', title: 'Про нас' },
  { to: '#contact', title: 'Контакти' },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        navbar.classList.remove('top')
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)'
        }
        navbar.style.transform = 'translateY(0)'
        setScrolled(true)
      } else {
        setScrolled(false)
        navbar.classList.add('top')
      }
    }
  }, [])

  return (
    <header id={'home'} style={{
      background: `url(${backgroundImage}) no-repeat top center/cover`
    }} className="hero">
      <div id="navbar" className="navbar top">
        <h1 className="logo">
          <span
            className="text-primary"
          >Rama </span>
          <span
            className={!scrolled ? 'text-secondary' : ''}
          >Вандама</span>
        </h1>
        <nav>
          <ul>
            {
              navBarItems.map((item, i) => (
                <li key={`nav-tab-${i}`}>
                  <a
                    href={item.to}
                  >
                    {item.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

      <div className="content">
        <h1>Стань
          <span className="text-primary"> сильнішим </span>
          уже сьогодні!</h1>
        <p className="text-outlined">Рама сама себе не накачає!</p>
        <a href="#about" className="btn text-secondary">
          <i className="fas fa-chevron-right text-secondary"/>
          &nbsp;
          Далі
        </a>
      </div>
    </header>
  )
}
