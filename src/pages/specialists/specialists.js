import React, { Component } from 'react'
import './specialists.css'

export default class specialists extends Component {
  state = { policy: false }

  render() {
    return (
      <div className='specialists' id='specialists'>

        <div className='services-hero'>
          <div className='services-text'>
            <h2>Специалисты</h2>
            <p>В процессе работы у вас постепенно складываются уникальные отношения с психотерапевтом, которые в определенный момент жизни служат местом поддержки и выращивания нужных изменений.</p>
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
                <p className='psyholog-title'>Научный подход</p>
                <p className='psyholog-inf'>Использование в работе научных методов</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/happy1.svg'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Образование</p>
                <p className='psyholog-inf'>Высшее психологическое образование и квалификация по психотерапии</p>
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
                        <img src='images/anna.png' alt='специалист' />
                        <div className='spec-card-info'>
                            <p className='spec-card-name'>Анна Пална</p>
                            <p className='spec-card-work'>Гештальт-терапевт</p>
                            <div className='spec-card-tags'>
                                <button>Тревога</button>
                                <button>Самооценка</button>
                                <button>Отношения</button>
                            </div>
                        </div>
                    </div>
                    <p className='spec-card-desc'>Помогаю научиться слышать свои эмоции и мысли, понимать и удовлетворять свои потребности, относиться к себе с заботой и добротой.</p>
                    <div className='spec-card-bottom'>
                        <p className='spec-card-price'>от <b>2500 Р</b></p>
                        <div className='button'><a href='#'>узнать больше</a></div>
                    </div>
                </div>

                <div className='spec-card'>
                    <div className='spec-card-top'>
                        <img src='images/anna.png' alt='специалист' />
                        <div className='spec-card-info'>
                            <p className='spec-card-name'>Тимур Батрутдинов</p>
                            <p className='spec-card-work'>Психоаналитик</p>
                            <div className='spec-card-tags'>
                                <button>Тревога</button>
                                <button>Самопознание</button>
                                <button>Отношения</button>
                            </div>
                        </div>
                    </div>
                    <p className='spec-card-desc'>Помогаю разобраться в себе, найти внутренние ресурсы и выстроить гармоничные отношения с окружающим миром.</p>
                    <div className='spec-card-bottom'>
                        <p className='spec-card-price'>от <b>3200 Р</b></p>
                        <div className='button'><a href='#'>узнать больше</a></div>
                    </div>
                </div>

                <div className='spec-card'>
                    <div className='spec-card-top'>
                        <img src='images/anna.png' alt='специалист' />
                        <div className='spec-card-info'>
                            <p className='spec-card-name'>Мария Соколова</p>
                            <p className='spec-card-work'>КПТ-терапевт</p>
                            <div className='spec-card-tags'>
                                <button>Депрессия</button>
                                <button>Самооценка</button>
                                <button>Стресс</button>
                            </div>
                        </div>
                    </div>
                    <p className='spec-card-desc'>Работаю с тревогой, депрессией и низкой самооценкой через когнитивно-поведенческий подход.</p>
                    <div className='spec-card-bottom'>
                        <p className='spec-card-price'>от <b>2800 Р</b></p>
                        <div className='button'><a href='#'>узнать больше</a></div>
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
        <p>Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
        <div className='about-form-cont'>
            <div className='form'>
            <textarea placeholder='Номер телефона'></textarea>
          <div>
            <input type="checkbox" id="policy" name="policy" checked={this.state.policy} onChange={e => this.setState({ policy: e.target.checked })} />
            <label htmlFor="policy">Согласие на обработку персональных данных</label>
          </div>
          <button type='submit' disabled={!this.state.policy}>оставить заявку</button>
        </div>
        <img src='images/group.svg'></img>
      </div>
        </div>
      </div>
    )
  }
}
