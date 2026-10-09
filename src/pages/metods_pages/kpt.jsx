import React from 'react'
import { Link } from 'react-router-dom'
import './metods_pages.css'
import Form from '../home/form/form'
export default function kpt() {
  return (
    <div className='metods-page'>
        <div className='metods-text'>
            <h1>Когнитивно-поведенческая терапия (КПТ)</h1>
            <p>Когнитивно-поведенческая терапия (КПТ) — это метод терапии, который помогает человеку увидеть связь между его мыслями, эмоциями и поведением.</p>
            <p>Согласно этому подходу, негативные убеждения и искаженные представления о себе, других людях и окружающем мире могут влиять на эмоциональное состояние и приводить к повторяющимся моделям поведения. Работа с убеждениями и мыслями помогает менять привычные реакции, справляться с трудностями и улучшать качество жизни</p>
            <h2>В каких случаях помогает КПТ</h2>
            <ol>
                <li>Стресс на работе</li>
                <li>ГТР (генерализованное тревожное расстройство)</li>
                <li>Социальная тревога</li>
                <li>Страхи / тревога / панические атаки</li>
                <li>Депрессивные состояния</li>
                <li>Зависимости</li>
                <li>ОКР (обсессивно-компульсивное расстройство)</li>
                <li>Травмирующий опыт</li>
                <li>Навязчивые мысли</li>
                <li>ПРЛ (пограничное расстройство личности)</li>
                <li>СДВГ (Синдром дефицита внимания и гиперактивности) / РАС (Расстройство аутистического спектра)</li>
                <li>Горе / утрата</li>
                <li>Стыд / вина</li>
                <li>Работа с эмоциями</li>
                <li>Гармоничные отношения (с партнером, родителями, друзьями, коллегами и другими людьми)</li>
                <li>Расставание / развод / переезд</li>
                <li>Одиночество</li>
                <li>Потеря смысла жизни</li>
                <li>Эмоциональное и профессиональное выгорание</li>
                <li>Постановка жизненных целей</li>
                <li>Отношения с собой (самооценка, принятие себя, уверенность в себе)</li>
            </ol>
            <h2>Как проходят консультации</h2>
            <p>На консультациях с психологом вы будете разбирать реальные ситуации из своей жизни: что произошло, какие мысли возникли, что вы почувствовали и как поступили после этого.</p>
            <p>Психолог будет предлагать небольшие домашние задания между консультациями: понаблюдать за своими реакциями, записать возникающие мысли или самостоятельно воспользоваться психологической техникой, которая разобрали во время консультации. Такие упражнения помогут закрепить ваши новые навыки, постепенно поменять привычные способы реагирования и улучшить качество жизни.</p>
            <h2>Как КПТ связана с доказательным подходом</h2>
            <p>Эффективность когнитивно-поведенческой терапии подтверждена большим количеством клинических исследований. Результаты этих работ легли в основу международных клинических рекомендаций, включая рекомендации Всемирной организации здравоохранения (ВОЗ).</p>
        </div>

        {/*ДРУГИЕ МЕТОДЫ*/}

        <div className='other-metods'>
            <h2>Еще про доказательные методики</h2>
            <div className='other-metods-cards'>
                <div className='other-metods-card'> 
                    <p className='title'>Терапия принятия и ответственности (ACT)</p>
                    <p className='short-text'>Научиться строить жизнь в соответствии со своими ценностями и быть психологически гибким.</p>
                </div>
                <Link className='link-metods' to='/act'>узнать больше <img src='images/black_arrow.svg'></img></Link>
            </div>
        </div>

        {/*СПЕЦИАЛИСТЫ*/}

        <div className='other-spec'>
            <h2>Специалисты, которые могут помочь</h2>
            <div className='spec-cards'>
              <div className='spec-card'>
                <div className='spec-info'>
                  <img src='/images/ulia.png' alt='специалист 1'></img>
                  <div className='home-specialists-info'>
                    <p className='home-specialists-name'>Юлия Верёвочникова</p>
                    <p className='home-spec-work'>Психолог, КПТ, ACT</p>
                    <p className='spec-price'>от <b>3500 Р</b> / сессия</p>
                  </div>
                </div>
                <div className='spec-links'>
                  <a href='/specialists/ulia' className='spec-link'>узнать больше<br/>о специалисте</a>
                  <a  className='form-reg' href='#form'>записаться</a>
                </div>
              </div>

              <div className='spec-card'>
                <div className='spec-info'>
                  <img src='/images/arina.png' alt='специалист 2'></img>
                  <div className='home-specialists-info'>
                    <p className='home-specialists-name'>Арина Джумаян</p>
                    <p className='home-spec-work'>Клинический психолог, КПТ, схема-терапия, семейная терапия</p>
                    <p className='spec-price'>от <b>3500 Р</b> / сессия</p>
                  </div>
                </div>
                <div className='spec-links'>
                  <a href='/specialists/arina' className='spec-link'>узнать больше<br/>о специалисте</a>
                  <a className='form-reg' href='#form'>записаться</a>
                </div>
              </div>
              
              <div className='spec-card'>
                <div className='spec-info'>
                  <img src='/images/valeria.png' alt='специалист 3'></img>
                  <div className='home-specialists-info'>
                    <p className='home-specialists-name'>Валерия Федина</p>
                    <p className='home-spec-work'>Клинический психолог, КПТ, АСТ</p>
                    <p className='spec-price'>от <b>3500 Р</b> / сессия</p>
                  </div>
                </div>
                <div className='spec-links'>
                  <a href='/specialists/valeria' className='spec-link'>узнать больше<br/>о специалисте</a>
                  <a  className='form-reg' href='#form'>записаться</a>
                </div>
              </div>
            </div>
            
          </div>


        {/*ФОРМА ЗАПИСИ*/}
        <div className='about-form'>
            <Form title="Мы поможем с выбором специалиста" />
        </div>

    </div>
  )
}
