import React, { Component } from 'react'
import './hero.css';

export default class hero extends Component {
  render() {
    return (
      <div className='hero' id='hero'>
        <div className='hero-text'>
            <h1>Современный психологический центр в Екатеринбурге</h1>
            <p>В нашей команде — психологи, которые используют в работе проверенные научные методы</p>
            <div className='button'>
                <a href="#form">подобрать<br/>специалиста</a>
            </div>
        </div>
        <div className='hero-img'>
            <img src='images/iskra.png' alt='Искра'></img>
        </div>
        <div className='message'>
          <p className='message-title'>Привет! Я - Искра <img src='images/star.svg'></img></p>
          <p className='message-text'>Я бережно помогу начать работу с психологом и буду рядом на протяжении всего пути</p>
        </div>
      </div>
    )
  }
}
