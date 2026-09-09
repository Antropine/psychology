import React, { Component } from 'react'
import './collaboration.css'
import Map from '../home/map/map'

export default class Collaboration extends Component {
  render() {
    return (
      <div className='collaboration'>
        <div className='hero-section'>
            <h2>Сотрудничество</h2>
            <p className='hero-text'>Мы работаем с корпоративными клиентами в онлайн и очном формате. Если вы ищете команду психологов, где на первом месте люди и совместное развитие, — будем рады сотрудничеству!</p>
        </div>

        <div className='collaboration_variant'>
            <h2>Варианты сотрудничества</h2>
            <div className='collaboration_section'>
                <div className='steps'>
                    <div className='step'>
                        <p className='step-number'>1</p>
                        <div className='step-text'><p>Корпоративные услуги психолога для сотрудников компаний из любых сфер</p></div>
                    </div>
                    <div className='step'>
                        <p className='step-number'>2</p>
                        <div className='step-text'><p>Проведение психологического обучения, тренинга, семинара для персонала</p></div>
                    </div>
                    <div className='step'>
                        <p className='step-number'>3</p>
                        <div className='step-text'><p>Предоставление пространства для вашего психологического мероприятия</p></div>
                    </div>
                    <div className='step'>
                        <p className='step-number'>4</p>
                        <div className='step-text'><p>Партнерство с блогерами и авторами контента</p></div>
                    </div>
                </div>
                <div className='col-img'>
                    <img src='images/colabor.png'></img>
                </div>
            </div>
        </div>

        <Map />

        <div className='collab-text'>
            <img src='images/heart.svg'></img>
            <p>Будем рады обсудить возможные варианты сотрудничества и предложить индивидуальное решение, которое будет отвечать вашим задачам</p>
        </div>

      </div>
    )
  }
}
