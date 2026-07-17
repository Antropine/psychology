import React, { Component } from 'react'
import './services.css'
import Form from '../home/form/form'
import { Link } from 'react-router-dom'


const services = [
  {
    id: 'konsultaciya',
    title: 'Консультация психолога',
    info: 'Только очно',
    text: 'Индивидуальный формат работы с психологом',
    price: '3500',
    detailText: 'Консультация психолога — это формат психологической помощи. Цель — проработать запрос клиента, чтобы он мог лучше понять себя, свое поведение. Приобрел полезные и функциональные навыки, которые можно использовать в повседневной жизни, и улучшил качество жизни.',
    specialists: [
      { name: 'Валерия Федина', role: 'Клинический психолог, КПТ, ACT', img: '/images/valeria.png', price: <>от <b>3500 Р</b> / сессия</>, href: '/specialists/valeria' },
      { name: 'Юлия Верёвочникова', role: 'Психолог, КПТ, АСТ', img: '/images/ulia.png', price: <>от <b>4000 Р</b> / сессия</>, href: '/specialists/ulia' },
      { name: 'Арина Джумаян', role: 'Клинический психолог, КПТ, схема-терапия, семейная терапия', img: '/images/arina.png', price: <>от <b>3500 Р</b> / сессия</>, href: '/specialists/arina' },
    ],
  },
  {
    id: 'semya',
    title: 'Семейный психолог',
    info: 'Только очно',
    text: 'От 2 участников во время консультации',
    price: '6000',
    detailText: 'Семейный психолог — это специалист, который помогает семьям и парам решать недопонимания в отношениях. Он работает с коммуникацией, помогает разрешить конфликты и кризисные ситуации. Основное отличие от индивидуального консультирования: семейный психолог не работает с одним человеком, а выстраивает работу с семьей как с единой системой. Запрос одного члена семьи может быть маркером нарушения работы всей системы.',
    specialists: [
      { name: 'Арина Джумаян', role: 'Клинический психолог, КПТ, схема-терапия, семейная терапия', img: '/images/arina.png', price: <>от <b>6000 Р</b> / сессия</>, href: '/specialists/arina' },
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
            <p>Наш современный психологический центр в Екатеринбурге работает в научно-обоснованных методах терапии: КПТ (когнитивно-поведенческая терапия), ACT (терапия принятия и ответственности), CFT (терапия, сфокусированная на сострадании), DBT (диалектическая поведенческая терапия) и схема-терапия.</p>
            <div className='attention'>
              <img src='/images/heart.svg' alt='сердце' />
              <p>Предоставляем услуги только<br/>клиентам старше 18 лет</p>
            </div>
            <div className='button'>
              <a href='#form'>выбрать<br/>специалиста</a>
            </div>
          </div>
          <div className='services-img'>
            <img src='/images/sad_iskra.png' alt='Грустная искра' />
          </div>
        </div>

        <div className='price-cards'>
          <h2>Наши услуги</h2>
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
            <p className='service-spec'>Список специалистов, которые работают с этой услугой:</p>
            <div className='service-specialists'>
              {s.specialists.map((spec, i) => (
                <div key={i} className='srv-spec-card'>
                  <div className='srv-spec-left'>
                    <img src={spec.img} alt={spec.name} />
                    <Link className='srv-spec-link' to={spec.href}><b>узнать больше<br/>о специалисте</b></Link>
                  </div>
                  <div className='srv-spec-right'>
                    <div className='srv-spec-info'>
                      <p className='srv-spec-name'>{spec.name}</p>
                      <p className='srv-spec-role'>{spec.role}</p>
                      <p className='srv-spec-price'>{spec.price}</p>
                    </div>
                    <div className='button'><a href='#form'>записаться</a></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
         <div className='about-form'>
          <Form title="Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам." />
          </div>
      </div>
    )
  }
}
