import { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

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
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </button>
      <div className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <nav onClick={() => setMenuOpen(false)}>
          <Link to="/about">о нас</Link>
          <Link to="/services">услуги</Link>
          <Link to="/specialists">специалисты</Link>
          <Link to="/contacts">контакты</Link>
        </nav>
      </div>
      <div className='header-button'>
        <div className='address'>
          <p className='city'>г. Екатеринбург</p>
          <p>ул. Малышева, 51<br />БЦ Высоцкий</p>
        </div>
        <div className='phone'>
          <div className='socail-icon'>
            <a href='https://t.me/iskra_psycenter' target='_blank'><img src='/images/tg.svg' alt='Телеграм' /></a>
            <a href='https://vk.ru/iskra_psycenter'><img src='images/vk.svg' alt='вконтакте'></img></a>
            <a href='https://max.ru/u/f9LHodD0cOIhJjPwMBW_HDyIkUGHf8Q5i_e-Tj2UgMTqlOh5eQlo4or6CUQ' target='_blank'><img src='/images/max.svg' alt='Макс' /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
