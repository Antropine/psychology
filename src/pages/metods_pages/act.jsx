import React from 'react'
import { Link } from 'react-router-dom'
import './metods_pages.css'
import Form from '../home/form/form'
export default function act() {
  return (
    <div className='metods-page'>
        <div className='metods-text'>
            <h1>Терапия принятия и ответственности (ACT)</h1>
            <p>Терапия принятия и ответственности (ACT) — это метод терапии, который помогает развивать психологическую гибкость. Она заключается в способности замечать и принимать свои мысли и эмоции без постоянной борьбы с ними, а также в умении действовать в соответствии со своими ценностями.</p>
            <h2>В каких случаях помогает ACT</h2>
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
            <p>На консультациях психолог помогает понять, как формируются привычные реакции: в каких ситуациях возникает избегание и почему определенные мысли так сильно привлекают внимание и влияют на поведение.</p>
            <p>Постепенно клиент учится более гибко относиться к своим переживаниям, не пытаясь постоянно подавлять или контролировать их. Важная часть терапии — работа с ценностями и развитие умения находиться в настоящем моменте.</p>
            <p>Вместе с психологом клиент исследует, что для него действительно важно, каким человеком он хочет быть в отношениях и на работе, а также что мешает двигаться в этом направлении сейчас.</p>
            <h2>Как КПТ связана с доказательным подходом</h2>
            <p>Терапия принятия и ответственности опирается на результаты клинических исследований, которые подтверждают ее эффективность при психологических трудностях. Метод продолжает изучаться и совершенствоваться по мере появления новых научных данных.</p>
        </div>

        {/*ДРУГИЕ МЕТОДЫ*/}

        <div className='other-metods'>
            <h2>Еще про доказательные методики</h2>
            <div className='other-metods-cards'>
                <div className='other-metods-card'> 
                    <p className='title'>Когнитивно-поведенческая терапия (КПТ)</p>
                    <p className='short-text'>Понять, как мысли влияют на эмоции и поведение, и приобрести навыки, чтобы самостоятельно использовать их в жизни</p>
                </div>
                <Link className='link-metods' to='/kpt'>узнать больше <img src='images/black_arrow.svg'></img></Link>
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
