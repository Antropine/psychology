import React, { Component } from 'react'
import './header.css';

export default class header extends Component {
  render() {
    return (
      <header>
        <img className='img_logo' src='images/logo.svg' alt='логотип'></img>
        <div className='nav-menu'>
            <nav>
                <a href="#">о нас</a>
                <a href="#">услуги</a>
                <a href="#">специалисты</a>
                <a href="#">блог</a>
                <a href="#">контакты</a>
                <a href="#">тесты</a>
            </nav>
        </div>
        <div className='header-button'>
            <a href="#">Расписание</a>
            <a href="#">Адрес</a>
        </div>
      </header>
    )
  }
}
