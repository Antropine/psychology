import React, { Component } from 'react'
import './hero.css';

export default class hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='hero-text'>
            <h1>Поддержка рядом, когда она нужна</h1>
            <p>Подберем психолога, с которым вам будет говорить комфортно о самом важном</p>
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
