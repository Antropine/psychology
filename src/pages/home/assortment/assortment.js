import React, { useState } from 'react'
import './assortment.css'

export default function Assortment() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const slides = [
    {
      title: 'Что вас беспокоит?',
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
      title: 'Какое время вас интересует',
      subtitle: 'Можно выбрать несколько вариантов ответа',
      answers: [
        'Утро будни',
        'День будни',
        'Вечер будни',
        'Утро выходной день',
        'День выходной день',
        'Вечер выходной день',
      ],
    },
    {
      title: 'Есть ли у вас еще пожелания к выбору специалиста',
      subtitle: 'Можно выбрать несколько вариантов ответа',
      answers: [

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
    <div className='assortment' id='assortment'>
      <div className='assortment-text'>
        <h2>Давайте найдем<br/>вашего психолога</h2>
        <p>Ответьте на несколько вопросов — это займет всего 2 минуты</p>
        <div className='button'>
          <a href='#specialists'>Начать поиск<br/>специалиста</a>
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
          {step === 2 ? (
            <textarea className="textarea-large" placeholder="Вы можете здесь написать любую информацию, которую считаете важной при подборе специалиста для вас" />
          ) : (
            <textarea placeholder="Другое" />
          )}
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
            <a href='#form' className='ahother'>Хочу сразу<br/>записаться на<br/>консультацию</a>
            <button
              className={`arrow-btn arrow-prev${step === 0 ? ' arrow-disabled' : ''}`}
              onClick={prevStep}
              disabled={step === 0}
              aria-label='Назад'
            >
              <img src='images/arrow_left.svg'></img>
            </button>
            <button
              className={`arrow-btn arrow-next${step === slides.length - 1 ? ' arrow-disabled' : ''}`}
              onClick={nextStep}
              disabled={step === slides.length - 1}
              aria-label='Далее'
            >
              <img src='images/arrow_right.svg'></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
