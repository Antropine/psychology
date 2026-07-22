import React, { Component } from 'react'
import '../arina/arina.css'
import Form from '../../home/form/form'

export default class Valeria extends Component {

  render() {
    return (
      <div className='specialist-page'>

        <div className='specialist-hero'>
          <div className='pecialist-hero-text'>
            <h2>Валерия Федина</h2>
            <p>Клинический психолог, взрослый психолог</p>
            <div className='specialist-button'>
              <button>Очно</button>
              <button>от 18 лет</button>
              <button>КПТ (когнитивно-поведенческая терапия)</button>
              <button>ACT-терапия (терапия принятия и ответственности)</button>
            </div>
            <div className='button' ><a href='#form'>Записаться на сессию</a></div>
          </div>
          <div className='spec-img'>
              <img src='/images/valeria.png' alt='Валерия Федина'></img>
          </div>
        </div>

        <div className='about-spec'>
          <div className='about-left'>
            <h2>О специалисте</h2>

            <div className='about-list'>
              <p className='about-tit'>Обо мне</p>
              <p className='about-text'>Для меня терапия — это пространство, где человек может встретиться с собой настоящим, без ярлыков и чувства вины. В работе я не даю универсальных советов и не решаю за человека, как ему жить. Вместо этого задаю вопросы, которые помогают лучше понять себя и найти собственные ответы. Клиенты ценят мой открытый стиль общения, отсутствие осуждения, честность и чувство юмора</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Подходы и опыт</p>
              <p className='about-text'>Клиническая психология, КПТ (когнитивно-поведенческая терапия) и ACT-терапия (терапия принятия и ответственности)<br/>Опыт: 4 года</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Образование</p>
              <p className='about-text'>Южно-Уральский государственный медицинский университет Министерства здравоохранения РФ (высшее образование, клинический психолог)</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Повышение квалификации и курсы</p>
              <p className='about-text'>«Базовый курс когнитивно-поведенческой психотерапии и психологического консультирования» от Ассоциации когнитивно-поведенческой психотерапии (повышение квалификации), «Терапия принятия и ответственности (ACT): полный курс» (повышение квалификации), «Научно-обоснованный интегративный подход в работе с зависимостями» (курс), «Терапия пустого усилия (когнитивно-ориентированный подход к облегчению душевной боли)» (курс), «Как помочь людям, в чьей семье и окружении есть человек с зависимостью» (курс)</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>С какими запросами предпочитаю работать <img src='/images/heart.svg'></img></p>
              <p className='about-text'>Тревога, навязчивые мысли, зависимости, депрессивные состояния, жизненные кризисы, РПП (расстройство пищевого поведения), сложности в отношениях с собой и окружающими, нестабильность в жизни и переезд</p>
            </div>
          </div>

          <div className='about-right'>
            {/* тут будет видео визитка и тд */}
          </div>
          
        </div>

        <div className='format-work'>
          <h2>Форматы работы</h2>
          <div className='format-cards'>
              <div className='format-card'>
                <p className='format-title'>Первичная консультация</p>
                <button className='format-time'>90 минут</button>
                <p className='format-text'>Индивидуальный формат работы с психологом</p>
                <p className='format-price'>4000 Р</p>
              </div>
              <div className='format-cards'>
              <div className='format-card'>
                <p className='format-title'>Вторичная консультация</p>
                <button className='format-time'>55 минут</button>
                <p className='format-text'>Индивидуальный формат работы с психологом</p>
                <p className='format-price'>3500 Р</p>
              </div>
              </div>
          </div>
        </div>

        <div className='about-form'>
          <Form title="Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам." />
        </div>

      </div>
    )
  }
}
