import React, { Component } from 'react'
import './anna.css'

const reviews = [
  { date: '11 сентября', text: 'Отличная клиника, чай, кофе и печенье в холле, приятные администраторы, спокойная атмосфера, которая настраивает на психотерапию. Я обратилась к Анне, и готова всем рекомендовать её как замечательного специалиста.', name: 'Алефтина' },
  { date: '3 октября', text: 'Работаю с Анной уже полгода. За это время многое изменилось в моём отношении к себе и к близким. Очень ценю её внимательность и профессионализм.', name: 'Марина' },
  { date: '17 ноября', text: 'Первый раз пошла к психологу и очень рада, что попала именно к Анне. Она помогла мне разобраться в ситуации, которая казалась тупиком. Спасибо огромное!', name: 'Екатерина' },
  { date: '2 декабря', text: 'Анна — профессионал своего дела. Чувствуется глубокое понимание темы и искренняя забота о клиенте. После каждой сессии выхожу с новым пониманием себя.', name: 'Дмитрий' },
  { date: '14 января', text: 'Долго не решалась обратиться за помощью, но Анна создала такую атмосферу доверия, что страхи ушли уже на первой встрече. Рекомендую всем, кто ищет поддержку.', name: 'Ольга' },
]

export default class Anna extends Component {
  state = { current: 0 }

  prev = () => {
    this.setState(s => ({ current: s.current === 0 ? reviews.length - 1 : s.current - 1 }))
  }

  next = () => {
    this.setState(s => ({ current: s.current === reviews.length - 1 ? 0 : s.current + 1 }))
  }

  render() {
    const { current } = this.state
    const review = reviews[current]

    return (
      <div className='specialist-page'>

        <div className='specialist-hero'>
          <div className='pecialist-hero-text'>
            <h2>Анна Пална</h2>
            <p>Детский психолог, подростковый психолог, детско-родительский психолог, психолог</p>
            <div className='specialist-button'>
              <button>Гештальт-терапия</button>
              <button>Очно</button>
              <button>от 18 лет</button>
            </div>
            <div className='button'><a>Записаться на сессию</a></div>
          </div>
          <img src='/images/anna.png' alt='Анна Пална'></img>
        </div>

        <div className='about-spec'>
          <div className='about-left'>
            <h2>О специалисте</h2>

            <div className='about-list'>
              <p className='about-tit'>Обо мне</p>
              <p className='about-text'>Отношения с собой и близкими (детьми, супругами, родителями, друзьями), родительство, репродуктивные трудности, беременность и роды, горе и потери, регуляция эмоций</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Подходы психотерапии и опыт</p>
              <p className='about-text'>Гештальт-терапия<br/>Опыт 5 лет</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Образование</p>
              <p className='about-text'>Московский институт психоанализа (психолог, диплом с отличием), Московский институт Гештальта и Психодрамы (гештальт-терапевт, перинатальный психолог)</p>
            </div>

            <div className='about-list'>
              <p className='about-tit'>Кому помогает <img src='/images/heart.svg'></img></p>
              <p className='about-text'>Взрослым людям, независимо от семейного положения, рода занятий и прочих особенностей самоопределения; родителям; людям, находящимся в кризисе и столкнувшимся с потерей</p>
            </div>

            <div className='reviews'>
              <p className='about-tit'>Отзывы</p>
              <div className='review-card'>
                <p className='review-date'>{review.date}</p>
                <p className='review-text'>{review.text}</p>
                <p className='review-name'>{review.name}</p>
                <div className='review-footer'>
                  <div className='steps-indicator'>
                    {reviews.map((_, i) => (
                      <div
                        key={i}
                        className={'step-bar' + (i === current ? ' active' : '')}
                        onClick={() => this.setState({ current: i })}
                      />
                    ))}
                  </div>
                  <div className='quiz-arrows'>
                    <button className='arrow-btn arrow-prev' onClick={this.prev}>
                      <svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
                        <path d='M13 16L7 10L13 4' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/>
                      </svg>
                    </button>
                    <button className='arrow-btn arrow-next' onClick={this.next}>
                      <svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
                        <path d='M7 4L13 10L7 16' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='button'><a>Посмотреть сертификаты</a></div>
          </div>

          <div className='about-right'>
            <div className='about-video'>
              <p>Видео-визитка\приветствие</p>
            </div>
            <div className='right-text'>
              <p className='about-tit'>Немного о себе</p>
              <p>выссывсывьтсыьвтсбьывсьбывтсььывьбстбывьсбывисбывбсььывбьсвыьбыимбьывмьывмбьывмьтывбьмтыбвьтмбьывмбьывмьбвытмывтмывтмьбывтмывтмбтвыбмьтыьбмбывтмбвьтмбьывтмбьывтмммм</p>
            </div>
            <a className='spec-writes' href='#'>Специалист пишет &#8594;</a>
          </div>
        </div>

        <div className='about-form'>
          <p>Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
          <div className='form'>
            <textarea placeholder='Номер телефона'></textarea>
            <div>
              <input type="checkbox" id="policy" name="poilcy" defaultChecked />
              <label htmlFor="policy">Согласие на обработку персональных данных</label>
            </div>
            <button type='submit'>оставить заявку</button>
          </div>
        </div>

        <div className='specialists'>
          <h2>Специалисты, которые могут помочь</h2>
          <div className='specialist-flex'>
            <div className='spec-card'>
              <div className='spec-card-top'>
                <img src='/images/anna.png' alt='специалист' />
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
                <img src='/images/anna.png' alt='специалист' />
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
                <img src='/images/anna.png' alt='специалист' />
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

      </div>
    )
  }
}
