import React, { Component } from 'react'
import './howwork.css'

export default class howwork extends Component {
  render() {
    return (
      <div className='work'>
        <h2>Как это работает</h2>
        <div className='work-steps'>
            <div className='work-step'>
                <p className='step-header'>1 Расскажите о себе</p>
                <p>Несколько вопросов помогут понять, что вас беспокоит и какоф формат вам подойдет</p>
            </div>
            <div className='work-step'>
                <p className='step-header'>2 Подберем психолога</p>
                <p>Алгоритм подберет специалиста, исходя из ваших ответов и предпочтений</p>
            </div>
            <div className='work-step'>
                <p className='step-header'>3 Запишитесь на сессию</p>
                <p>Выберите удобное время и место для сессии</p>
            </div>
            <div className='work-step'>
                <p className='step-header'>4 Получите поддержку</p>
                <p>Приходите на сессию и получайте поддержку в комфортной среде</p>
            </div>
        </div>
      </div>
    )
  }
}
