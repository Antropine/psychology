import React, { Component } from 'react'
import './advantages.css'

export default class advantages extends Component {
  render() {
    return (
      <div className='advantages' id='advantages'>
        <div className='advantages-step'>
            <img src='images/sad.svg' alt='грусть'></img>
            <p>Конфиденциально<br/>и безопасно</p>
        </div>
        <div className='advantages-step'>
            <img src='images/trevoga1.svg' alt='беспокойство'></img>
            <p>Оперативная<br/>запись</p>
        </div>
        <div className='advantages-step'>
            <img src='images/strah.svg' alt='страх'></img>
            <p>Уютный кабинет<br/>и транспортная доступность</p>
        </div>
      </div>
    )
  }
}
