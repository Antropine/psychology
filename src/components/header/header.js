import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './header.css';

export default class header extends Component {
  render() {
    return (
      <header>
        <a href='/'>
          <img className='img_logo' src='/images/logo.svg' alt='логотип'></img>
        </a>
        <div className='nav-menu'>
            <nav>
              <Link  to="/about">о нас</Link>
              <Link  to="/services">услуги</Link>
              <Link  to="/specialists">специалисты</Link>
              <Link  to="/blog">блог</Link>
              <Link  to="/contacts">контакты</Link>
              <Link  to="/tests">тесты</Link>
            </nav>
        </div>
        <div className='header-button'>
            <div className='address'>
              <p>г. Екатеринбург</p>
              <p>ул. Малышева, 51<br/>БЦ Высоцкий</p>
            </div>
            <div className='phone'>
              <p>+74839430393</p>
              <div className='socail-icon'>
                <img src='/images/tg.svg' alt='Телеграм'></img>
                <img src='/images/max.svg' alt='Макс'></img>
              </div>
            </div>
        </div>
      </header>
    )
  }
}
