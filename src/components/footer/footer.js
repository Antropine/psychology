import React, { Component } from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

export default class footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer'>
          <img src='/images/logo.svg'></img>
            <div className='footer-column'>
              <p>О проекте</p>
              <Link to="/about">о нас</Link>
              <Link to="/services">услуги</Link>
              <Link to="/specialists">специалисты</Link>
              <Link to="/contacts">контакты</Link>
            </div>
            <div className='footer-column'>
              <p>Еще</p>
              <Link to='/agreement'>пользовательское соглашение</Link>
              <Link to='/policy'>политика конфиденциальности</Link>
              <Link to='/cookie'>согласие на обработку cookie</Link>
            </div>
            <div className='footer-column'>
              <p className='company-info'>ООО «Грация»<br/>ИНН 6670429660<br/>КПП 667001001</p>
            </div>
        </div>
        <p className='footer-subtitle'>Оператор включен в Реестр под регистрационным № 66-24-029440 (Приказ № 88 от 24.12.2024)</p>
        <p className='footer-subtitle'>Информация на сайте носит ознакомительный характер</p>
      </footer>
    )
  }
}
