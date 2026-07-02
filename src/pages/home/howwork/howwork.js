import React, { Component } from 'react'
import './howwork.css'

export default class howwork extends Component {
  render() {
    return (
      <div className='work' id='work'>
        <h2>Как это работает</h2>
        <div className='work-steps'>
            <div className='work-step'>
                <p className='step-header'>1 Расскажите о своем запросе</p>
                <p>Несколько вопросов помогут понять, что вас беспокоит и какой формат вам подойдет</p>
            </div>
            <div className='work-step'>
                <p className='step-header'>2 Подберем психолога</p>
                <p>Мы поможем выбрать специалиста, исходя из ваших ответов</p>
            </div>
            <div className='work-step'>
                <p className='step-header'>3 Запишитесь на сессию</p>
                <p>Выберите удобное время для консультации</p>
            </div>
            <div className='work-step'>
                <p className='step-header'>4 Получите поддержку</p>
                <p>Приходите на консультацию и получайте поддержку в комфортном пространстве</p>
            </div>
        </div>
      </div>
    )
  }
}
