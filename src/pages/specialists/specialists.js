import React, { Component } from 'react'
import './specialists.css'
import Form from '../home/form/form'

export default class specialists extends Component {
  state = { policy: false }

  render() {
    return (
      <div className='specialists' id='specialists'>

        <div className='services-hero'>
          <div className='services-text'>
            <h2>Специалисты</h2>
            <p>В ходе работы у вас складываются уникальные отношения с психологом, которые со временем становятся местом поддержки и способствуют необходимым изменениям.</p>
            <div className='attention'>
              <img src='images/heart.svg' alt='сердце' />
              <p>Предоставляем услуги только<br/>клиентам старше 18 лет</p>
            </div>
            <div className='button'>
              <a href='#form'>подобрать<br/>специалиста</a>
            </div>
          </div>
          <div className='services-img'>
            <img src='images/poddergka.png' alt='Грустная искра' />
          </div>
        </div>

        <div className='our-psyhologs'>
          <h2>Принципы нашей работы</h2>
          <div className='psyholog-lists'>

            <div className='psyholog-list'>
              <img src='images/sick.svg'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Бережный подход</p>
                <p className='psyholog-inf'>Консультации проходят в спокойной атмосфере с соблюдением конфиденциальности</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/red.svg'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Научные методы</p>
                <p className='psyholog-inf'>Использование в работе подходов с доказанной эффективностью</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/happy1.svg'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Образование</p>
                <p className='psyholog-inf'>Высшее психологическое образование и квалификация по доказательным методикам</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/apathy.svg'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Профессиональное развитие</p>
                <p className='psyholog-inf'>Любовь к психологии и постоянное совершенствование в профессии</p>
              </div>
            </div>

          </div>
        </div>


        <div className='specialists'>
            <h2>Специалисты</h2>
            <div className='specialist-flex'>
                <div className='spec-card'>
                    <div className='spec-card-top'>
                        <img src='images/valeria.png' alt='специалист' />
                        <div className='spec-card-info'>
                            <p className='spec-card-name'>Валерия Федина</p>
                            <p className='spec-card-work'>Клинический психолог, КПТ, ACT</p>
                            <div className='spec-card-tags'>
                                <button>Нестабильность в жизни</button>
                                <button>Ничего не радует</button>
                                <button>Тревога</button>
                            </div>
                        </div>
                    </div>
                    <p className='spec-card-desc'>Мне важно не только помочь клиенту понять причины своих переживаний, но и научить использовать эти знания в повседневной жизни.</p>
                    <div className='spec-card-bottom'>
                        <p className='spec-card-price'>от <b>3500 Р</b></p>
                        <div className='button'><a href='/specialists/valeria'>узнать больше</a></div>
                    </div>
                </div>

                <div className='spec-card'>
                    <div className='spec-card-top'>
                        <img src='images/ulia.png' alt='специалист' />
                        <div className='spec-card-info'>
                            <p className='spec-card-name'>Юлия Верёвочникова</p>
                            <p className='spec-card-work'>Психолог, КПТ, ACT</p>
                            <div className='spec-card-tags'>
                                <button>Принятие себя</button>
                                <button>Тревога</button>
                                <button>Травмирующий опыт</button>
                            </div>
                        </div>
                    </div>
                    <p className='spec-card-desc'>В своей работе я придерживаюсь доказательных методов и опираюсь на последние научные данные, которые получаю на обучениях и повышениях квалификации.</p>
                    <div className='spec-card-bottom'>
                        <p className='spec-card-price'>от <b>4000 Р</b></p>
                        <div className='button'><a href='/specialists/ulia'>узнать больше</a></div>
                    </div>
                </div>

                <div className='spec-card'>
                    <div className='spec-card-top'>
                        <img src='images/arina.png' alt='специалист' />
                        <div className='spec-card-info'>
                            <p className='spec-card-name'>Арина Джумаян</p>
                            <p className='spec-card-work'>Клинический психолог, КПТ, схема-терапия</p>
                            <div className='spec-card-tags'>
                                <button>Тревога, страхи</button>
                                <button>РПП</button>
                                <button>Романтические отношения</button>
                            </div>
                        </div>
                    </div>
                    <p className='spec-card-desc'>Я убеждена, что универсальных решенийне существует: то, что подходит одному, может не подойти другому, поэтому выстраиваю терапию с клиентом всегда индивидуально.</p>
                    <div className='spec-card-bottom'>
                        <p className='spec-card-price'>от <b>3500 Р</b></p>
                        <div className='button'><a href='/specialists/arina'>узнать больше</a></div>
                    </div>
                </div>
            </div>
        </div>



        <div className='spec-work'>
        <h2>Как пройдет прием</h2>
        <div className='spec-work-steps'>
            <div className='spec-work-step'>
                <p className='step-header'>1 Определим запрос</p>
                <p>На первой консультации специалист поможет определить, что именно вас сейчас беспокоит, и предложит понятный план работы.</p>
            </div>
            <div className='spec-work-step'>
                <p className='step-header'>2 Выстроим доверительный контакт</p>
                <p>Обеспечит комфортную обстановку, где вы сможете быть собой и работать в своем темпе.</p>
            </div>
            <div className='spec-work-step'>
                <p className='step-header'>3 Будем рядом с вами на каждом этапе</p>
                <p>Бережно и с полным пониманием пройдет с вами путь изменений.</p>
            </div>
            <div className='spec-work-step'>
                <p className='step-header'>4 Подробно ответим на ваши вопросы</p>
                <p>Специалист без осуждений выслушает вас и ответит на все вопросы.</p>
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
