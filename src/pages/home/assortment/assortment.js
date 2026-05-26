import React, { useState } from 'react'
import './assortment.css'

export default function Assortment() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const slides = [
    {
      title: 'Что вас беспокоит? (Мы можем помочь)',
      subtitle: 'Можно выбрать несколько вариантов ответа',
      answers: [
        'Тревога и страхи',
        'Стресс на работе',
        'Расставание / развод',
        'Стыд и вина',
        'Нестабильность в жизни',
        'Принятие себя',
        'Романтические отношения',
        'Переезд',
        'Дети и родители',
        'Ничего не радует',
        'Травматический опыт',
        'Одиночество',
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

  const toggleAnswer = (item) => {
    const current = answers[step] || []
    const isSelected = current.includes(item)
    setAnswers({
      ...answers,
      [step]: isSelected
        ? current.filter((a) => a !== item)
        : [...current, item],
    })
  }

  const isSelected = (item) => (answers[step] || []).includes(item)

  const nextStep = () => {
    if (step < slides.length - 1) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep(step - 1)
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
            <button
              key={index}
              className={isSelected(item) ? 'selected' : ''}
              onClick={() => toggleAnswer(item)}
            >
              {item}
            </button>
          ))}
          <textarea placeholder='Другое________________________'></textarea>
        </div>
        <div className='quiz-nav'>
          <div className='steps-indicator'>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`step-bar ${index === step ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className='quiz-arrows'>
            <button
              className={`arrow-btn arrow-prev${step === 0 ? ' arrow-disabled' : ''}`}
              onClick={prevStep}
              disabled={step === 0}
              aria-label='Назад'
            >
              <svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
                <path d='M13 16L7 10L13 4' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </button>
            <button
              className={`arrow-btn arrow-next${step === slides.length - 1 ? ' arrow-disabled' : ''}`}
              onClick={nextStep}
              disabled={step === slides.length - 1}
              aria-label='Далее'
            >
              <svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
                <path d='M7 4L13 10L7 16' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
