import React, { Component } from 'react'
import './services.css'

export default class Services extends Component {

  cards = [
    {
      title: 'Консультация психолога',
      info: 'Только очно',
      text: 'Индивидуальный формат работы с психологом',
      price: '3000',
      detailTitle: 'Консультация психолога',
      detailText: 'Индивидуальная работа с психологом в комфортной обстановке. Специалист поможет разобраться с тревогой, стрессом, отношениями и другими запросами.',
      specialists: [
        { name: 'Анна Пална', role: 'Гештальт-терапевт', price: '2500', img: 'images/anna.png', tags: ['Тревога', 'Самооценка', 'Отношения'] },
        { name: 'Тимур Батрутдинов', role: 'Психоаналитик', price: '3200', img: 'images/anna.png', tags: ['Тревога', 'Самопознание', 'Отношения'] },
      ],
    },
    {
      title: 'Психологические тренинги',
      info: 'Только очно',
      text: 'Практико-ориентированные тренинги по управлению гневом и преодолению тревоги',
      price: '2000',
      detailTitle: 'Психологические тренинги',
      detailText: 'Групповые занятия с практическими упражнениями. Помогают выработать навыки управления эмоциями в безопасной обстановке.',
      specialists: [
        { name: 'Анна Пална', role: 'Гештальт-терапевт', price: '2500', img: 'images/anna.png', tags: ['Тревога', 'Самооценка'] },
      ],
    },
    {
      title: 'Групповая психотерапия',
      info: 'Только очно',
      text: 'Наполняемость группы от 3 участников',
      price: '3000',
      detailTitle: 'Групповая психотерапия',
      detailText: 'Работа в небольшой группе под руководством психотерапевта. Участники поддерживают друг друга и прорабатывают общие темы.',
      specialists: [
        { name: 'Тимур Батрутдинов', role: 'Психоаналитик', price: '3200', img: 'images/anna.png', tags: ['Тревога', 'Самопознание'] },
      ],
    },
    {
      title: 'Семейный психолог',
      info: 'Только очно',
      text: 'От 2 участников встречи',
      price: '3000',
      detailTitle: 'Семейный психолог',
      detailText: 'Совместная работа с партнёром, родителями или детьми. Помогает наладить коммуникацию и решить конфликты внутри семьи.',
      specialists: [
        { name: 'Анна Пална', role: 'Гештальт-терапевт', price: '2500', img: 'images/anna.png', tags: ['Отношения', 'Самооценка'] },
        { name: 'Тимур Батрутдинов', role: 'Психоаналитик', price: '3200', img: 'images/anna.png', tags: ['Отношения', 'Самопознание'] },
      ],
    },
  ]

  state = {
    selectedCard: 0,
  }

  detailsRef = React.createRef()

  selectCard = (e, index) => {
    e.preventDefault()
    this.setState({ selectedCard: index }, () => {
      this.detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  render() {
    const { selectedCard } = this.state
    const active = selectedCard !== null ? this.cards[selectedCard] : null

    return (
      <div className='services'>
        <div className='services-hero'>
          <div className='services-text'>
            <h2>Услуги</h2>
            <p>Наш психологический центр в Екатеринбурге работает в научно-обоснованных методах психотерапии — КПТ, ACT, CFT и DBT</p>
            <div className='attention'>
              <img src='images/heart.svg' alt='сердце' />
              <p>Предоставляем услуги только<br/>клиентам старше 18 лет</p>
            </div>
            <div className='button'>
              <a href='#'>подобрать<br/>специалиста</a>
            </div>
          </div>
          <div className='services-img'>
            <img src='images/sad_iskra.png' alt='Грустная искра' />
          </div>
        </div>

        <div className='price-cards'>
          <h2>Непосредственно услуги</h2>
          <div className='price-card'>
            {this.cards.map((card, index) => (
              <div
                key={index}
                className={`card${selectedCard === index ? ' card--active' : ''}`}
                onClick={(e) => this.selectCard(e, index)}
              >
                <p className='card-title'>{card.title}</p>
                <p className='card-info'>{card.info}</p>
                <p className='card-text'>{card.text}</p>
                <p className='card-price'>от <b>{card.price} Р</b> / сессия</p>
                <div className='button'>
                  <a href='#' onClick={e => e.preventDefault()}>узнать подробнее</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`details${active ? ' details--visible' : ''}`} ref={this.detailsRef}>
          {active && (
            <>
              <h2>{active.detailTitle}</h2>
              <p className='details-text'>{active.detailText}</p>
              <p className='details-subtitle'>Специалисты по этой услуге</p>

              <div className='details-specialists'>
                {active.specialists.map((spec, i) => (
                  <div key={i} className='specialists-card'>
                    <div className='baze'>
                      <img src={spec.img} alt={spec.name} />
                      <div className='specialists-info'>
                        <p className='specialists-name'>{spec.name}</p>
                        <p className='spec-work'>{spec.role}</p>
                        <div className='problem'>
                          {spec.tags.map((tag, j) => (
                            <button key={j}>{tag}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='specialists-price'>
                      <a className='spec-link'>узнать больше о специалисте</a>
                      <div className='button'><a href='#'>записаться</a></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    )
  }
}
