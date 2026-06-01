import React, { Component } from 'react'
import './services.css'

const services = [
  {
    id: 'konsultaciya',
    title: 'Консультация психолога',
    info: 'Только очно',
    text: 'Индивидуальный формат работы с психологом',
    price: '3000',
    detailText: 'Индивидуальная работа с психологом в комфортной обстановке. Специалист поможет разобраться с тревогой, стрессом, отношениями и другими запросами.',
    specialists: [
      { name: 'Анна Пална', role: 'Гештальт-терапевт', img: '/images/anna.png', tags: ['Тревога', 'Самооценка', 'Отношения'], href: '/specialists/anna' },
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Тревога', 'Самопознание', 'Отношения'], href: '/specialists/timur' },
    ],
  },
  {
    id: 'treningi',
    title: 'Психологические тренинги',
    info: 'Только очно',
    text: 'Практико-ориентированные тренинги по управлению гневом и преодолению тревоги',
    price: '2000',
    detailText: 'Групповые занятия с практическими упражнениями. Помогают выработать навыки управления эмоциями в безопасной обстановке.',
    specialists: [
      { name: 'Анна Пална', role: 'Гештальт-терапевт', img: '/images/anna.png', tags: ['Тревога', 'Самооценка'], href: '/specialists/anna' },
    ],
  },
  {
    id: 'gruppa',
    title: 'Групповая психотерапия',
    info: 'Только очно',
    text: 'Наполняемость группы от 3 участников',
    price: '3000',
    detailText: 'Работа в небольшой группе под руководством психотерапевта. Участники поддерживают друг друга и прорабатывают общие темы.',
    specialists: [
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Тревога', 'Самопознание'], href: '/specialists/timur' },
    ],
  },
  {
    id: 'semya',
    title: 'Семейный психолог',
    info: 'Только очно',
    text: 'От 2 участников встречи',
    price: '3000',
    detailText: 'Совместная работа с партнёром, родителями или детьми. Помогает наладить коммуникацию и решить конфликты внутри семьи.',
    specialists: [
      { name: 'Анна Пална', role: 'Гештальт-терапевт', img: '/images/anna.png', tags: ['Отношения', 'Самооценка'], href: '/specialists/anna' },
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Отношения', 'Самопознание'], href: '/specialists/timur' },
    ],
  },
]

export default class Services extends Component {
  render() {
    return (
      <div className='services'>

        <div className='services-hero'>
          <div className='services-text'>
            <h2>Услуги</h2>
            <p>Наш психологический центр в Екатеринбурге работает в научно-обоснованных методах психотерапии — КПТ, ACT, CFT и DBT</p>
            <div className='attention'>
              <img src='/images/heart.svg' alt='сердце' />
              <p>Предоставляем услуги только<br/>клиентам старше 18 лет</p>
            </div>
            <div className='button'>
              <a href='#'>подобрать<br/>специалиста</a>
            </div>
          </div>
          <div className='services-img'>
            <img src='/images/sad_iskra.png' alt='Грустная искра' />
          </div>
        </div>

        <div className='price-cards'>
          <h2>Непосредственно услуги</h2>
          <div className='price-card'>
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className='card'>
                <p className='card-title'>{s.title}</p>
                <p className='card-info'>{s.info}</p>
                <p className='card-text'>{s.text}</p>
                <p className='card-price'>от <b>{s.price} Р</b> / сессия</p>
                <div className='button'><a href={`#${s.id}`}>узнать подробнее</a></div>
              </a>
            ))}
          </div>
        </div>

        {services.map((s) => (
          <div key={s.id} id={s.id} className='service-section'>
            <h2>{s.title}</h2>
            <p className='service-detail-text'>{s.detailText}</p>
            <p className='service-spec'>Список специалистов, которые работают с этой услугой</p>
            <div className='service-specialists'>
              {s.specialists.map((spec, i) => (
                <div key={i} className='srv-spec-card'>
                  <div className='srv-spec-left'>
                    <img src={spec.img} alt={spec.name} />
                    <a className='srv-spec-link' href={spec.href}>узнать больше<br/>о специалисте</a>
                  </div>
                  <div className='srv-spec-right'>
                    <div className='srv-spec-info'>
                      <p className='srv-spec-name'>{spec.name}</p>
                      <p className='srv-spec-role'>{spec.role}</p>
                      <div className='srv-spec-tags'>
                        {spec.tags.map((tag, j) => (
                          <button key={j}>{tag}</button>
                        ))}
                      </div>
                    </div>
                    <div className='button'><a href='#'>записаться</a></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    )
  }
}
