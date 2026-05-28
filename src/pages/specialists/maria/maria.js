import React, { Component } from 'react'
import '../anna/anna.css'

export default class Maria extends Component {
  render() {
    return (
      <div className='specialist-page'>

        <div className='specialist-hero'>
          <img src='/images/anna.png' alt='Мария Соколова' />
          <div className='specialist-hero-info'>
            <h1>Мария Соколова</h1>
            <p className='specialist-method'>КПТ-терапевт</p>
            <div className='specialist-tags'>
              <span>Депрессия</span>
              <span>Самооценка</span>
              <span>Стресс</span>
            </div>
            <p className='specialist-price'>от <b>2800 ₽</b> за сессию</p>
            <div className='button'>
              <a href='#'>записаться на сессию</a>
            </div>
          </div>
        </div>

        <div className='specialist-about'>
          <h2>О специалисте</h2>
          <p>Работаю с тревогой, депрессией и низкой самооценкой через когнитивно-поведенческий подход.</p>
        </div>

        <div className='specialist-education'>
          <h2>Образование</h2>
          <ul>
            <li>Высшее психологическое образование</li>
            <li>Квалификация по когнитивно-поведенческой терапии</li>
            <li>Регулярная личная терапия и супервизия</li>
          </ul>
        </div>

        <div className='specialist-work'>
          <h2>С чем работаю</h2>
          <ul>
            <li>Депрессия и подавленное настроение</li>
            <li>Низкая самооценка</li>
            <li>Хронический стресс</li>
            <li>Тревожные расстройства</li>
          </ul>
        </div>

        <div className='about-form'>
          <p>Запишитесь на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
          <div className='form'>
            <textarea placeholder='Номер телефона'></textarea>
            <div>
              <input type='checkbox' id='policy-maria' name='policy' defaultChecked />
              <label htmlFor='policy-maria'>Согласие на обработку персональных данных</label>
            </div>
            <button type='submit'>оставить заявку</button>
          </div>
        </div>

      </div>
    )
  }
}
