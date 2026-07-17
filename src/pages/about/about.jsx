import React, { Component } from 'react'
import './about.css'
import Form from '../home/form/form'

export default class about extends Component {

  maskot = [
    {
      name: "Радость",
      info: (
        <>
        <p>
          Я — <span className='black-mars'>ИСКРА</span>. И я так выгляжу, когда радуюсь.
          Мне хочется прыгать, танцевать и улыбаться.
        </p>
        <p>
          <strong>Мои отличительные черты:</strong><br />
          счастливая, веселая.
        </p>
        <p>
          <strong>Я часто говорю следующие фразы:</strong><br />
          «Я очень рада».
        </p>
      </>
      ),
      img: 'images/happy-card.png',
    },
    {
      name: "Гнев",
      info: (
        <>
        <p>
          Я — <span className='black-mars'>ИСКРА</span>. И я так выгляжу, когда злюсь.
          Мне хочется потопать, покричать и поколотить подушку.
        </p>
        <p>
          <strong>Мои отличительные черты:</strong><br />
          вспыльчивая, импульсивная.
        </p>
        <p>
          <strong>Я часто говорю следующие фразы:</strong><br />
          «Я сейчас очень злюсь».
        </p>
      </>
      ),
      img: 'images/gnev-card.png',
    },
    {
      name: "Страх",
      info: (
        <>
        <p>
          Я — <span className='black-mars'>ИСКРА</span>. И я так выгляжу, когда испытываю страх. Мне хочется убежать или спрятаться в комфортном месте и ощутить себя в безопасности.
        </p>
        <p>
          <strong>Мои отличительные черты:</strong><br />
          беспокойная, одинокая.
        </p>
        <p>
          <strong>Я часто говорю следующие фразы:</strong><br />
          «Я боюсь», «Мне очень страшно»
        </p>
      </>
      ),
      img: 'images/scary-card.png',
    },
    {
      name: "Тревожность",
      info: (
        <>
        <p>
          Я — <span className='black-mars'>ИСКРА</span>.  И я так выгляжу, когда испытываю тревогу. Мне хочется всё контролировать и как можно быстрее перестать ощущать внутреннюю тревогу.
        </p>
        <p>
          <strong>Мои отличительные черты:</strong><br />
          сильно предусмотрительная, ощущающая панику и приближение катастрофы
        </p>
        <p>
          <strong>Я часто говорю следующие фразы:</strong><br />
          «Я чувствую тревогу», «Мне очень тревожно».
        </p>
      </>
      ),
      img: 'images/worry-card.png',
    }
  ]

  state = {
    current: 0
  }

  prev = () => {
    this.setState(s => ({
      current: (s.current - 1 + this.maskot.length) % this.maskot.length
    }))
  }

  next = () => {
    this.setState(s => ({
      current: (s.current + 1) % this.maskot.length
    }))
  }

  render() {
    return (
      <div className='about' id='about'>
        <div className='about-hero'>
            <div className='about-text'>
                <h2>О нас</h2>
                <p>Современный психологический центр «Искра» в Екатеринбурге: очные консультации с психологом для людей старше 18 лет. К нам можно обратиться с такими вопросами, как тревога, принятие себя, страхи, отношения, нестабильность в жизни, стресс на работе.</p>
                <p>Наши психологи имеют высшее психологическое образование и используют в работе подходы с доказанной эффективностью: КПТ (когнитивно-поведенческую терапию), ACT (терапию принятия и ответственности),CFT (терапию, сфокусированную на сострадании), DBT (диалектическую поведенческую терапию) и схема-терапию. Каждый специалистс пониманием и без осуждения поможет разобраться в вашем вопросеи прийти вместе к его решению.</p>
            </div>
            <div className='about-img'>
            <img src='images/blue_person.png' alt='Голубая искра'></img>
            </div>
        </div>
        
      <div className='iskra'>
        <h2>Кто такая Искра?</h2>
        <div className='iskra-div'>
          <div className='hero-img'>
            <img src='images/iskra1.png' alt='Искра'></img>
          </div>
          <div className='iskra-text'>
            <p className='iskra-title'>Привет! Я - Искра <img src='images/star.svg'></img></p>
            <p>Я являюсь частью команды современного психологического центра в Екатеринбурге «Искра».</p>
            <p>Я очень эмоциональная и могу испытывать, как люди, разные эмоции: радость, грусть, гнев, скуку, тревожность и страх.</p>
            <p>Также я очень любознательная: увлечена психологией и люблю делиться своими знаниями. </p>
            <p>Еще я очень ответственная: в психологическом центре я знакомлю клиентов с нашими специалистами и принципами работы, помогаю начать работу с психологом и нахожусь рядом на протяжении всего пути.</p>
            <p>Давайте знакомиться с миром психологии и получать поддержку вместе!</p>
          </div>
        </div>
      </div>


      <div className='pluses'>
          <h2>Преимущества</h2>
          <p className='pluses-subtitle'>Наш центр имеет ряд преимуществ:</p>
          <div className='pluses-grid'>
            <div className='pluses-card'>
              <p className='pluses-title'>Научный подход</p>
              <p className='pluses-text'>В нашей команде — психологи, которые используют в работе научные методы</p>
            </div>

            <div className='pluses-card'>
              <p className='pluses-title'>Конфиденциально, безопасно и бережно</p>
              <p className='pluses-text'>Мы с пониманием и без осуждения поможем разобраться в вашем вопросе и прийти вместе к его решению</p>
            </div>

            <div className='pluses-card'>
              <p className='pluses-title'>Команда профессионалов</p>
              <p className='pluses-text'>Специалисты центра имеют высшее психологическое образование и квалификацию по психотерапии, увлечены профессией и постоянно совершенствуются в ней</p>
            </div>
            <div className='pluses-card'>
              <p className='pluses-title'>Транспортная доступность</p>
              <p className='pluses-text'>В 10-15 минутах от каждой нашей локации находится автобусная, троллейбусная и трамвайная остановка, а также станция метро</p>
            </div>
          </div>

        </div><div className='about-form'>
            <Form title="Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам." />
          </div><div className='kartochki'>
            <h2>Карточки</h2>
            <div className='kartochki-track'>
              {[0, 1].map(offset => {
                const item = this.maskot[(this.state.current + offset) % this.maskot.length]
                return (
                  <div className='kartochki-card' key={offset}>
                    <h3 className='card-title'>{item.name}</h3>
                    <p className='card-text'>{item.info}</p>
                    <img src={item.img} alt={item.name} />
                  </div>
                )
              })}
            </div>
            <div className='kartochki-arrows'>
              <button className='kartochki-arrow' onClick={this.prev}><img src='images/arrow_left.svg' alt='назад'></img></button>
              <button className='kartochki-arrow' onClick={this.next}><img src='images/arrow_right.svg' alt='вперед'></img></button>
            </div>
          </div>
          </div>
    )
  }
}
