import React, { Component } from 'react'
import './hero.css';

export default class hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='hero-text'>
            <h1>Современный психологический центр в Екатеринбурге</h1>
            <p>В нашей команде — психологи, которые используют в работе проверенные научные методы</p>
            <div className='button'>
                <a href="#">подобрать<br/>специалиста</a>
                <a href="#">пройти<br/>мини-тест</a>
            </div>
        </div>
        <div className='hero-img'>
            <img src='images/iskra.png' alt='Искра'></img>
        </div>
      </div>
    )
  }
}
