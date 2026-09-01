import React, { Component } from 'react'
import './howwork.css'

export default class howwork extends Component {
  render() {
    return (
      <div className='work' id='work'>
        <h2>Как мы работаем <img src='images/heart_white.svg' alt='' /></h2>
        <div className='work-steps'>
            <div className='work-step'>
                <p className='step-header'><span className='step-nubmer'>1.</span> Подберем психолога</p>
                <p>Поможем определиться с психологом, который подойдет именно вам</p>
            </div>
            <div className='work-step'>
                <p className='step-header'><span className='step-nubmer'>2.</span> Запишитесь на встречу</p>
                <p>Выберите удобное время для консультации</p>
            </div>
            <div className='work-step'>
                <p className='step-header'><span className='step-nubmer'>3.</span> Получите поддержку</p>
                <p>Приходите на консультацию и получайте поддержку в комфортном пространстве</p>
            </div>
        </div>
      </div>
    )
  }
}
