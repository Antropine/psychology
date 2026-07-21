import React, { Component } from 'react'
import './arina.css'
import Form from '../../home/form/form'

export default class Arina extends Component {

  render() {
    return (
      <div className='specialist-page'>

        <div className='specialist-hero'>
          <div className='pecialist-hero-text'>
            <h2>Арина Джумаян</h2>
            <p>Клинический психолог, семейный психолог</p>
            <div className='specialist-button'>
              <button>Очно</button>
              <button>от 18 лет</button>
              <button>Схема-терапия</button>
              <button>Семейная терапия</button>
              <button>КПТ (когнитивно-поведенческая терапия)</button>
            </div>
            <div className='button' ><a href='#form'>Записаться на сессию</a></div>
          </div>
          <div className='spec-img'>
              <img src='/images/arina.png' alt='Арина Джумаян'></img>
          </div>
        </div>

        <div className='about-spec'>
          <div className='about-left'>
            <h2>О специалисте</h2>

            <div className='about-list'>
              <p className='about-tit'>Обо мне</p>
              <p className='about-text'>Я практикующий психолог, работаю со взрослыми, семьями и детьми. Помогаю справляться с тревогой, внутренними кризисами и сложностями в отношениях, возвращая человеку ощущение опоры и ясности. Уже после первых консультаций появляется больше понимания себя и чувствуется облегчение</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Подходы и опыт</p>
              <p className='about-text'>Клиническая психология, КПТ (когнитивно-поведенческая терапия), схема-терапия, семейная терапия Опыт: 3 года</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Образование</p>
              <p className='about-text'>Уральский федеральный университет имени первого Президента России Б. Н. Ельцина (высшее образование, психолог), Институт психотерапии и медицинской психологии им. Б.Д. Карвасарского (профессиональная переподготовка, клинический психолог)</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Повышение квалификации и курсы</p>
              <p className='about-text'>«Когнитивно-поведенческая терапия в практике психолога» (повышение квалификации), «Схема-терапия» (повышение квалификации), «Основные техники семейной психотерапии» (повышение квалификации), «Ранние травмы души. Диагностика и терапия расстройств, связанных с нарушением привязанности» (повышение квалификации), «Возможности использования техник ACT в практике психолога консультанта» (курс)</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>С какими запросами предпочитаю работать <img src='/images/heart.svg'></img></p>
              <p className='about-text'>Социальная тревога, ГТР (генерализованное тревожное расстройство), межличностные проблемы (романтические отношения, детско-родительские отношения, друзья, коллеги), РПП (расстройство пищевого поведения), жизненные кризисы, прокрастинация, ничего не радует, потеря смысла жизни, стресс на работе, отношения с собой (самооценка, принятие себя, уверенность в себе)</p>
            </div>
          </div>

          <div className='about-right'>
            {/* тут будет видео визитка и тд */}
          </div>
          
        </div>

        <div className='format-work'>
          <h2>Формат работы</h2>
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
              <div className='format-cards'>
                  <div className='format-card'>
                    <p className='format-title'>Семейный психолог</p>
                    <button className='format-time'>90 минут</button>
                    <p className='format-text'>От 2 участников во время консультации</p>
                    <p className='format-price'>6000 Р</p>
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
