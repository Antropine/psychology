import React, { Component } from 'react'
import '../anna/anna.css'

export default class Timur extends Component {
  render() {
    return (
      <div className='specialist-page'>

        <div className='specialist-hero'>
          <img src='/images/anna.png' alt='Тимур Батрутдинов' />
          <div className='specialist-hero-info'>
            <h1>Тимур Батрутдинов</h1>
            <p className='specialist-method'>Психоаналитик</p>
            <div className='specialist-tags'>
              <span>Тревога</span>
              <span>Самопознание</span>
              <span>Отношения</span>
            </div>
            <p className='specialist-price'>от <b>3200 ₽</b> за сессию</p>
            <div className='button'>
              <a href='#'>записаться на сессию</a>
            </div>
          </div>
        </div>

        <div className='specialist-about'>
          <h2>О специалисте</h2>
          <p>Помогаю разобраться в себе, найти внутренние ресурсы и выстроить гармоничные отношения с окружающим миром.</p>
        </div>

        <div className='specialist-education'>
          <h2>Образование</h2>
          <ul>
            <li>Высшее психологическое образование</li>
            <li>Квалификация по психоанализу</li>
            <li>Регулярная личная терапия и супервизия</li>
          </ul>
        </div>

        <div className='specialist-work'>
          <h2>С чем работаю</h2>
          <ul>
            <li>Тревожные расстройства</li>
            <li>Самопознание и личностный рост</li>
            <li>Сложности в отношениях</li>
            <li>Внутренние конфликты</li>
          </ul>
        </div>

        <div className='about-form'>
          <p>Запишитесь на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
          <div className='form'>
            <textarea placeholder='Номер телефона'></textarea>
            <div>
              <input type='checkbox' id='policy-timur' name='policy' defaultChecked />
              <label htmlFor='policy-timur'>Согласие на обработку персональных данных</label>
            </div>
            <button type='submit'>оставить заявку</button>
          </div>
        </div>

      </div>
    )
  }
}
