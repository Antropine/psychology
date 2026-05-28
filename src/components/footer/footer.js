import React, { Component } from 'react'
import './footer.css'

export default class footer extends Component {
  render() {
    return (
      <footer>
        <img src='/images/logo.svg'></img>
        <div className='footer-column'>
          <p>О проекте</p>
          <a>о нас</a>
          <a>услуги</a>
          <a>специалисты</a>
          <a>блог</a>
          <a>контакты</a>
        </div>
        <div className='footer-column'>
          <p>Полезное</p>
          <a>психологические тесты</a>
          <a>статьи о психологии</a>
        </div>
        <div className='footer-column'>
          <p>Еще</p>
          <a>пользовательское соглашение</a>
          <a>согласие на обработку персональных данных</a>
        </div>
      </footer>
    )
  }
}
