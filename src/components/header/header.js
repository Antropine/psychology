import { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className='logo-div'>
        <a href='/'>
        <img className='img_logo' src='/images/logo.svg' alt='логотип' />
      </a>
      <p className='logo_subtitle'>Современный<br/>психологический<br/>центр</p>
      </div>
      <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)} aria-label='меню'>
        {menuOpen ? '✕' : '☰'}
      </button>
      <div className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <nav onClick={() => setMenuOpen(false)}>
          <Link to="/about">о нас</Link>
          <Link to="/services">услуги</Link>
          <Link to="/specialists">специалисты</Link>
          <Link to="/blog">блог</Link>
          <Link to="/contacts">контакты</Link>
          <Link to="/tests">тесты</Link>
        </nav>
      </div>
      <div className='header-button'>
        <div className='address'>
          <p>г. Екатеринбург</p>
          <p>ул. Малышева, 51<br />БЦ Высоцкий</p>
        </div>
        <div className='phone'>
          <p>+74839430393</p>
          <div className='socail-icon'>
            <img src='/images/tg.svg' alt='Телеграм' />
            <img src='/images/max.svg' alt='Макс' />
          </div>
        </div>
      </div>
    </header>
  );
}
