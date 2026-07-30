import React, { Component } from 'react'
import './hero.css';

export default class hero extends Component {
  render() {
    return (
      <div className='hero' id='hero'>
        <div className='hero-text'>
          <h1>Современный психологический центр в Екатеринбурге</h1>
          <p>В нашей команде — психологи, которые используют в работе доказательные методы</p>
          <div className='button'>
            <a href="#form">записаться<br/>на сессию</a>
          </div>
        </div>

        <div className='hero-image-wrap'>
          <img className='hero-img' src='images/iskra.png' alt='Искра'/>
          <img className='message-img' src="images/massage.svg" alt="Сообщение"/>
      </div>
      </div>
    )
  }
}