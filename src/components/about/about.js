import React, { Component } from 'react'
import './about.css'

export default class about extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-hero'>
            <div className='about-text'>
                <h2>О нас</h2>
                <p>Современный психологический центр «Искра» в Екатеринбурге: очные консультации с психологом для людей старше 18 лет. К нам можно обратиться с такими вопросами, как тревога, принятие себя, страхи, апатия, нестабильность в жизни, стресс на работе.</p>
                <p>Также мы проводим групповую терапию и тренинги по управлению гневом, преодолению тревоги.</p>
                <p>Все наши психологи имеют высшее психологическое образование и используют в работе только научно-обоснованные методы психотерапии — КПТ, ACT, CFT и DBT. Каждый специалист с пониманием и без осуждения поможет разобраться в вашем вопросе и прийти вместе к его решению.</p>
            </div>
            <div className='about-img'>
            <img src='images/blue_person.png' alt='Голубая искра'></img>
            </div>
        </div>

        <div className='address-card'>
            <div className='adress'></div>
            <div className='adress'></div>
            <div className='adress'></div>
        </div>


      </div>
    )
  }
}
