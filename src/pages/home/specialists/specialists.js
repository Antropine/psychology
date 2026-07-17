import React, { Component } from 'react'
import './specialists.css'

export default class specialists extends Component {
  render() {
    return (
      <div className='home-specialists' id='specialists'>
        <h2>Психологи нашего центра</h2>
        <div className='home-specialists-cards'>

          <div className='home-specialists-card'>
            <div className='home-specialists-baze'>
              <img src='images/valeria.png' alt='специалист 1'></img>
              <div className='home-specialists-info'>
                <p className='home-specialists-name'>Валерия Федина</p>
                <p className='home-spec-work'>Клинический психолог, КПТ (когнитивно-поведенческая терапия), ACT (терапия принятия и ответственности)</p>
              </div>
            </div>

            <div className='home-problem'>
              <button>Настабильность в жизни</button>
              <button>Помощь близкому</button>
              <button>Ничего не радует</button>
              <button>Тревога, страхи</button>
              <button>Переезд</button>
            </div>

            <div className='home-specialists-price'>
              <p className='home-price'>от <b>3500 Р</b> / сессия</p>
              <div className='button'>
                  <a href='/specialists/valeria'>выбрать</a>
              </div>
            </div>
          </div>

          <div className='home-specialists-card'>
            <div className='home-specialists-baze'>
              <img src='images/ulia.png' alt='специалист 1'></img>
              <div className='home-specialists-info'>
                <p className='home-specialists-name'>Юлия Верёвочникова</p>
                <p className='home-spec-work'>Психолог, КПТ (когнитивно-поведенческая терапия), ACT (терапия принятияи ответственности)</p>
              </div>
            </div>

            <div className='home-problem'>
              <button>Тревога, страхи</button>
              <button>Отношения</button>
              <button>Принятие себя</button>
              <button>Травмирующий опыт</button>
              <button>Стресс на работе</button>
            </div>

            <div className='home-specialists-price'>
              <p className='home-price'>от <b>4000 Р</b> / сессия</p>
              <div className='button'>
                  <a href='/specialists/ulia'>выбрать</a>
              </div>
            </div>
          </div>

          <div className='home-specialists-card'>
            <div className='home-specialists-baze'>
              <img src='images/arina.png' alt='специалист 1'></img>
              <div className='home-specialists-info'>
                <p className='home-specialists-name'>Арина Джумаян</p>
                <p className='home-spec-work'>Клинический психолог, КПТ (когнитивно-поведенческая терапия), схема-терапия, семейная терапия</p>
              </div>
            </div>

            <div className='home-problem'>
              <button>Дети и родители</button>
              <button>Расставание / развод</button>
              <button>Тревога, страхи</button>
              <button>Отношения</button>
              <button>РПП</button>
            </div>

            <div className='home-specialists-price'>
              <p className='home-price'>от <b>3500 Р</b> / сессия</p>
              <div className='button'>
                  <a href='/specialists/arina'>выбрать</a>
              </div>
            </div>
          </div>

        </div>

        <div className='home-specialists-kryto'>
          <p>Наши специалисты имеют <span className='mars'>высшее</span> психологическое <span className='mars'>образование</span> и квалификацию по психотерапии, увлечены профессией и постоянно <span className='mars'>совершенствуются</span> в ней</p>
        </div>
      </div>
    )
  }
}
