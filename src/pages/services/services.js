import React, { Component } from 'react'
import './services.css'

const services = [
  {
    id: 'konsultaciya',
    title: 'Консультация психолога',
    info: 'Только очно',
    text: 'Индивидуальный формат работы с психологом',
    price: '3000',
    detailText: 'Консультация психолога — это формат психологической помощи. Цель — проработать запрос клиента, чтобы он мог лучше понять себя, свое поведение и улучшил качество жизни, приобрел полезные и функциональные навыки, которые можно использовать в повседневной жизни',
    specialists: [
      { name: 'Анна Пална', role: 'Гештальт-терапевт', img: '/images/anna.png', tags: ['Тревога', 'Самооценка', 'Отношения'], href: '/specialists/anna' },
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Тревога', 'Самопознание', 'Отношения'], href: '/specialists/timur' },
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Отношения', 'Самопознание'], href: '/specialists/timur' },
    ],
  },
  {
    id: 'semya',
    title: 'Семейный психолог',
    info: 'Только очно',
    text: 'От 2 участников встречи',
    price: '3000',
    detailText: 'Семейный психолог — это специалист, который помогает семьям и парам решать недопонимания в отношениях. Он работает с коммуникацией, помогает разрешить конфликты и кризисные ситуации. Основное отличие от индивидуального консультирования: семейный психолог не работает с одним человеком, а выстраивает работу с семьей как с единой системой. Запрос одного члена семьи может быть маркером нарушения работы всей системы.',
    specialists: [
      { name: 'Анна Пална', role: 'Гештальт-терапевт', img: '/images/anna.png', tags: ['Отношения', 'Самооценка'], href: '/specialists/anna' },
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Отношения', 'Самопознание'], href: '/specialists/timur' },
      { name: 'Тимур Батрутдинов', role: 'Психоаналитик', img: '/images/anna.png', tags: ['Отношения', 'Самопознание'], href: '/specialists/timur' },
    ],
  },
]

export default class Services extends Component {
  render() {
    return (
      <div className='services' id='services'>

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
                    <div className='button'><a href='#form'>записаться</a></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
         <div className='about-form'>
        <p>Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
          <div className='about-form-cont'>
              <div className='form' id='form'>
              <textarea placeholder='Номер телефона'></textarea>
            <div>
              <input type="checkbox" id="policy" name="policy"/>
              <label htmlFor="policy">Согласие на обработку персональных данных</label>
            </div>
            <button type='submit'>оставить заявку</button>
          </div>
          <img src='images/group.svg'></img>
          </div>
        </div>
      </div>
    )
  }
}
