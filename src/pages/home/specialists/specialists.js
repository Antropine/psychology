import React, { Component } from 'react'
import './specialists.css'

export default class specialists extends Component {
  render() {
    return (
      <div className='home-specialists' id='specialists'>
        <h2>Психологи, которые могут помочь</h2>
        <div className='home-specialists-cards'>

          <div className='home-specialists-card'>
            <div className='home-specialists-baze'>
              <img src='images/anna.png' alt='специалист 1'></img>
              <div className='home-specialists-info'>
                <p className='home-specialists-name'>Анна Пална</p>
                <p className='home-spec-work'>Гшетальт-терапевт</p>
                <div className='home-problem'>
                  <button>Тревога</button>
                  <button>Самооценка</button>
                  <button>Отношения</button>
                </div>
              </div>
            </div>
            <div className='home-specialists-price'>
              <p className='home-price'>от <b>2500 Р</b> / сессия</p>
              <div className='button'>
                  <a href='#'>выбрать</a>
              </div>
            </div>
          </div>

          <div className='home-specialists-card'>
            <div className='home-specialists-baze'>
              <img src='images/anna.png' alt='специалист 1'></img>
              <div className='home-specialists-info'>
                <p className='home-specialists-name'>Тимур Батрутдинов</p>
                <p className='home-spec-work'>Психоаналитик</p>
                <div className='home-problem'>
                  <button>Тревога</button>
                  <button>Самопознание</button>
                  <button>Отношения</button>
                </div>
              </div>
            </div>
            <div className='home-specialists-price'>
              <p className='home-price'>от <b>3200 Р</b> / сессия</p>
              <div className='button'>
                  <a href='#'>выбрать</a>
              </div>
            </div>
          </div>

          <div className='home-specialists-card'>
            <div className='home-specialists-baze'>
              <img src='images/anna.png' alt='специалист 1'></img>
              <div className='home-specialists-info'>
                <p className='home-specialists-name'>Анна Пална</p>
                <p className='home-spec-work'>Гшетальттерапевт</p>
                <div className='home-problem'>
                  <button>Тревога</button>
                  <button>Самооценка</button>
                  <button>Отношения</button>
                </div>
              </div>
            </div>
            <div className='home-specialists-price'>
              <p className='home-price'>от <b>2500 Р</b> / сессия</p>
              <div className='button'>
                  <a href='#'>выбрать</a>
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
