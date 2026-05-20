import React, { Component } from 'react'
import './howwork.css'

export default class howwork extends Component {
  render() {
    return (
      <div className='work'>
        <h2>Как это работает</h2>
        <div className='work-steps'>
            <div className='work-step'>
                <p><b>1 Расскажите о себе</b></p>
                <p>Несколько вопросов помогут понять, что вас беспокоит и какоф формат вам подойдет</p>
            </div>
            <div className='work-step'>
                <p><b>2 Подберем психолога</b></p>
                <p>Несколько вопросов помогут понять, что вас беспокоит и какоф формат вам подойдет</p>
            </div>
            <div className='work-step'>
                <p><b>3 Запишитесь на сессию</b></p>
                <p>Несколько вопросов помогут понять, что вас беспокоит и какоф формат вам подойдет</p>
            </div>
            <div className='work-step'>
                <p><b>4 Получите поддержку</b></p>
                <p>Несколько вопросов помогут понять, что вас беспокоит и какоф формат вам подойдет</p>
            </div>
        </div>
      </div>
    )
  }
}
