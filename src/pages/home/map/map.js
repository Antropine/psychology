import React, { Component } from 'react'
import './map.css'

export default class Map extends Component {
  render() {
    return (
      <div className='map-section'>
        <h2>Контакты</h2>
        <div className='map' id='map'>
          <div className='address-text'>
            <div className='address-item'>
              <p><b>Адреса</b></p>
              <p>г. Екатеринбург, Переулок северный 2А, офис 202</p>
            </div>
            <div className='address-item'>
              <p><b>Тел:</b></p>
              <p>+79506555154</p>
            </div>
            <div className='address-item'>
              <p><b>Телеграмм:</b></p>
              <p>@Iskra_Ekb</p>
            </div>
            <div className='address-item'>
              <p><b>Мах:</b></p>
              <p>@Iskra_Ekb</p>
            </div>
            <div className='address-item'>
              <p><b>График работы:</b></p>
              <p>будни 10:00 - 22:00<br/>выходные 10:00 - 20:00</p>
            </div>
          </div>
        <div className='map-frame'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9!2d37.6!3d55.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzAwLjAiTiAzN8KwMzYnMDAuMCJF!5e0!3m2!1sru!2sru!4v1600000000000!5m2!1sru!2sru'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Карта'
          />
        </div>
        </div>
      </div>
    )
  }
}
