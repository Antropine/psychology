import React, { Component } from 'react'
import './advantages.css'

export default class advantages extends Component {
  render() {
    return (
      <div className='advantages'>
        <div className='advantages-step'>
            <img src='images/happy.png' alt='счастье'></img>
            <p>Понятный план терапии и результат</p>
        </div>
        <div className='advantages-step'>
            <img src='images/sad.png' alt='грусть'></img>
            <p>Конфиденциально и безопасно</p>
        </div>
        <div className='advantages-step'>
            <img src='images/worry.png' alt='беспокойство'></img>
            <p>Находимся в 4 районах Екатеринбурга</p>
        </div>
        <div className='advantages-step'>
            <img src='images/happy.png' alt='счастье'></img>
            <p>Оперативная запись</p>
        </div>
      </div>
    )
  }
}
