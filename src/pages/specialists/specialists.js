import React, { Component } from 'react'
import './specialists.css'

export default class specialists extends Component {
  state = { policy: false }

  render() {
    return (
      <div className='specialists'>

        <div className='services-hero'>
          <div className='services-text'>
            <h2>Специалисты</h2>
            <p>В процессе работы у вас постепенно складываются уникальные отношения с психотерапевтом, которые в определенный момент жизни служат местом поддержки и выращивания нужных изменений.</p>
            <div className='attention'>
              <img src='images/heart.svg' alt='сердце' />
              <p>Предоставляем услуги только<br/>клиентам старше 18 лет</p>
            </div>
            <div className='button'>
              <a href='#'>подобрать<br/>специалиста</a>
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
              <img src='images/sick.png'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Бережный подход</p>
                <p>мы на стороне людей, а не идей о том, как «правильно»</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/red.png'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Научный подход</p>
                <p>Опора на научные данные, а не на фантазии</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/happy1.png'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Самопознание</p>
                <p>Проходят регулярную супервизию, личную терапию</p>
              </div>
            </div>

            <div className='psyholog-list'>
              <img src='images/sick.png'></img>
              <div className='psyholog-text'>
                <p className='psyholog-title'>Образование</p>
                <p>Высшее психологическое образование и квалификация по психотерапии</p>
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
                <p className='step-header'>1 Соберём анамнез и определим запрос</p>
                <p>Уже на первой консультации специалист поймёт, что вас беспокоит, и поможет сформулировать цель работы.</p>
            </div>
            <div className='spec-work-step'>
                <p className='step-header'>2 Выстроим доверие</p>
                <p>Создаст тёплую и безопасную атмосферу, где можно быть собой.</p>
            </div>
            <div className='spec-work-step'>
                <p className='step-header'>3 Поддержим вас в процессе</p>
                <p>Поможет постепенно менять отношения с собой и окружающими.</p>
            </div>
            <div className='spec-work-step'>
                <p className='step-header'>4 Подробно объясним нюансы</p>
                <p>Специалист внимательно выслушает и ответит на все вопросы.</p>
            </div>
            </div>
        </div>

        
        <div className='about-form'>
        <p>Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
        <div className='form'>
        <textarea placeholder='Номер телефона'></textarea>
          <div>
            <input type="checkbox" id="policy" name="policy" checked={this.state.policy} onChange={e => this.setState({ policy: e.target.checked })} />
            <label htmlFor="policy">Согласие на обработку персональных данных</label>
          </div>
          <button type='submit' disabled={!this.state.policy}>оставить заявку</button>
        </div>
      </div>

      </div>
    )
  }
}
