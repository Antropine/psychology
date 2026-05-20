import React, { Component } from 'react'
import './advantages.css'

export default class advantages extends Component {
  render() {
    return (
      <div className='advantages'>
        <div className='advantages-step'>
            <img src='images/happy.png' alt='счастье'></img>
            <p>Проверенные специалисты</p>
        </div>
        <div className='advantages-step'>
            <img src='images/sad.png' alt='грусть'></img>
            <p>Проверенные специалисты</p>
        </div>
        <div className='advantages-step'>
            <img src='images/worry.png' alt='беспокойство'></img>
            <p>Проверенные специалисты</p>
        </div>
        <div className='advantages-step'>
            <img src='images/happy.png' alt='счастье'></img>
            <p>Проверенные специалисты</p>
        </div>
      </div>
    )
  }
}
