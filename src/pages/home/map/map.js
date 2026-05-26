import React, { Component } from 'react'
import './map.css'

export default class Map extends Component {
  render() {
    return (
      <div className='map-section'>
        <h2>Карта</h2>
        <div className='map'>
          <div className='address-text'>
          <p>Адреса</p>
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
