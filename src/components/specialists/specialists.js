import React, { Component } from 'react'
import './specialists.css'

export default class specialists extends Component {
  render() {
    return (
      <div className='specialists'>
        <h2>Психологи, которые могут помочь</h2>
        <div className='specialists-cards'>

          <div className='specialists-card'> 
            <div className='baze'>
              <img src='images/anna.png' alt='специалист 1'></img>
              <div className='specialists-info'>
                <p className='specialists-name'>Анна Пална</p>
                <p className='spec-work'>Гшетальт-терапевт</p>
                <div className='problem'>
                  <button>Тревога</button>
                  <button>Самооценка</button>
                  <button>Отношения</button>
                </div>
              </div>
            </div>
            <div className='specialists-price'>
              <p className='price'>от <b>2500 Р</b> / сессия</p>
              <div className='button'>
                  <a href='#'>выбрать</a>
              </div>
            </div>
          </div>

          <div className='specialists-card'> 
            <div className='baze'>
              <img src='images/anna.png' alt='специалист 1'></img>
              <div className='specialists-info'>
                <p className='specialists-name'>Тимур Батрутдинов</p>
                <p className='spec-work'>Психоаналитик</p>
                <div className='problem'>
                  <button>Тревога</button>
                  <button>Самопознание</button>
                  <button>Отношения</button>
                </div>
              </div>
            </div>
            <div className='specialists-price'>
              <p className='price'>от <b>3200 Р</b> / сессия</p>
              <div className='button'>
                  <a href='#'>выбрать</a>
              </div>
            </div>
          </div>

          <div className='specialists-card'> 
            <div className='baze'>
              <img src='images/anna.png' alt='специалист 1'></img>
              <div className='specialists-info'>
                <p className='specialists-name'>Анна Пална</p>
                <p className='spec-work'>Гшетальттерапевт</p>
                <div className='problem'>
                  <button>Тревога</button>
                  <button>Самооценка</button>
                  <button>Отношения</button>
                </div>
              </div>
            </div>
            <div className='specialists-price'>
              <p className='price'>от <b>2500 Р</b> / сессия</p>
              <div className='button'>
                  <a href='#'>выбрать</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
