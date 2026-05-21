import React, { Component } from 'react'
import './place.css'

export default class place extends Component {
  render() {
    return (
      <div className='place'>
        <h2>В центре уютно и спокойно</h2>
        <p className='place-text'>Наши кабинеты — это пространство, где можно быть собой и меняться в своем темпе</p>
        <div className='place-img'>
            <div>
                <img src='images/photo1.png' alt='фото 1'></img>
            </div>
            <div>
                <img src='images/photo2.png' alt='фото 2'></img>
                <img src='images/photo3.png' alt='фото 3'></img>
            </div>
        </div>
      </div>
    )
  }
}
