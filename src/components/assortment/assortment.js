import React, { useState } from 'react'
import './assortment.css'

export default function Assortment() {
  const [step, setStep] = useState(0)

  const slides = [
    {
      title: 'Что вас беспокоит? (Мы можем помочь)',
      subtitle: 'Можно выбрать несколько вариантов ответа',
      answers: [
        'Тревога, стресс',
        'Отношения',
        'Одиночество',
        'Проблемы с собой',
        'Самооценка',
        'Выгорание',
      ],
    },
    {
      title: 'Как вас зовут?',
      subtitle: 'Можно выбрать несколько вариантов ответа',
      answers: [
        'Тревога, стресс',
        'Отношения',
        'Одиночество',
        'Проблемы с собой',
        'Самооценка',
        'Выгорание',
      ],
    },
     {
      title: 'Что вас беспокоит? (Мы можем помочь)',
      subtitle: 'Можно выбрать несколько вариантов ответа',
      answers: [
        'Тревога, стресс',
        'Отношения',
        'Одиночество',
        'Проблемы с собой',
        'Самооценка',
        'Выгорание',
      ],
    },
  ]

  const nextStep = () => {
    if (step < slides.length - 1) {
      setStep(step + 1)
    }
  }

  return (
    <div className='assortment'>
      <div className='assortment-text'>
        <h2>Давайте найдем психолога</h2>
        <p>Ответьте на несколько вопросов — это займет всего 2 минуты</p>
        <div className='button'>
          <a href='#'>Начать поиск<br/>специалиста</a>
        </div>
        <img src='images/sad_person.png'></img>
      </div>
      <div className='quiz-form'>
        <p className='quiz-title'>{slides[step].title}</p>
        <p className='quiz-subtitle'>{slides[step].subtitle}</p>
        <div className='reasons'>
          {slides[step].answers.map((item, index) => (
            <button key={index} onClick={nextStep}>
              {item}
            </button>
          ))}
          <textarea placeholder='Другое_________________________'></textarea>
        </div>
        <div className="steps-indicator">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`step-bar ${index === step ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}