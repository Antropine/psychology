import React, { Component } from 'react'
import './footer.css'

export default class footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer'>
          <img src='/images/logo.svg'></img>
            <div className='footer-column'>
              <p>О проекте</p>
              <a href='/about'>о нас</a>
              <a href='/services'>услуги</a>
              <a href='/specialists'>специалисты</a>
              <a href='/blog'>блог</a>
              <a href='/contacts'>контакты</a>
            </div>
            <div className='footer-column'>
              <p>Полезное</p>
              <a href='/tests'>психологические тесты</a>
              <a href='/blog'>статьи о психологии</a>
            </div>
            <div className='footer-column'>
              <p>Еще</p>
              <a href='/agreement'>пользовательское соглашение</a>
              <a href='/policy'>политика конфиденциальности</a>
              <a href='/cookie'>согласие на обработку cookie</a>
            </div>
        </div>
        <p className='footer-subtitle'>Оператор включен в Реестр под регистрационным № 66-24-029440 (Приказ № 88 от 24.12.2024)</p>
        <p className='footer-subtitle'>Информация на сайте носит ознакомительный характер</p>
      </footer>
    )
  }
}
