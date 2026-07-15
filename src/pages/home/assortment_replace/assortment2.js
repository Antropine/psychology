import React, { Component } from 'react'
import './assortment2.css'

export default class Assortment2 extends Component {
  render() {
    return (
      <div className='assortment2'>
        <div className='assortment-text'>
            <h2>Давайте найдем<br/>вашего психолога</h2>
            <p>С полным пониманием ответим на все вопросы и поможем подобрать психолога для вас</p>
            <div className='button'>
            <a href='#specialists'>подобрать<br/>специалиста</a>
            </div>
            <img src='images/sad_person.png'></img>
        </div>
        <div className='advantages2'>
            <p className='advantages2_title'>Основные направления работы центра</p>
            <p className='advantages2_subtitle'>Это темы запросов, на которых специализируются наши психологи</p>
            <div className='advantages-lists'>
                <button className='advantages-list'>Тревога, страхи</button>
                <button className='advantages-list'>Стресс на работе</button>
                <button className='advantages-list'>Расставание / развод</button>
                <button className='advantages-list'>Помощь близкому</button>
                <button className='advantages-list'>Нестабильность в жизни</button>
                <button className='advantages-list'>Принятие себя</button>
                <button className='advantages-list'>Романтические отношения</button>
                <button className='advantages-list'>РПП</button>
                <button className='advantages-list'>Дети и родители</button>
                <button className='advantages-list'>Ничего не радует</button>
                <button className='advantages-list'>Травмирующий опыт</button>
                <button className='advantages-list'>Одиночество</button>
            </div>
        </div>
      </div>
    )
  }
}
