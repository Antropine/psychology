import React, { Component } from 'react'

const reviews = [
  {
    date:'11 сентября',
    text:'Отличная клиника, чай, кофе и печенье в холле, приятные администраторы, спокойная атмосфера, которая настраивает на психотерапию. Я обратилась к Анне, и готова всем рекомендовать её как замечательного специалиста.',
    name:'Алефтина'
  },
  {
    date:'3 октября',
    text:'Работаю с Анной уже полгода. За это время многое изменилось в моём отношении к себе и к близким. Очень ценю её внимательность и профессионализм.',
    name:'Марина'
  },
  {
    date:'17 ноября',
    text:'Первый раз пошла к психологу и очень рада, что попала именно к Анне. Она помогла мне разобраться в ситуации, которая казалась тупиком. Спасибо огромное!',
    name:'Екатерина'
  },
  {
    date:'2 декабря',
    text:'Анна — профессионал своего дела. Чувствуется глубокое понимание темы и искренняя забота о клиенте. После каждой сессии выхожу с новым пониманием себя.',
    name:'Дмитрий'
  },
  {
    date:'14 января',
    text:'Долго не решалась обратиться за помощью, но Анна создала такую атмосферу доверия, что страхи ушли уже на первой встрече. Рекомендую всем, кто ищет поддержку.',
    name:'Ольга'
  }
]

export default class Reviews extends Component {

  state = {
    current:0
  }

  prev = () => {
    this.setState(s => ({
      current:s.current === 0 ? reviews.length - 1 : s.current - 1
    }))
  }

  next = () => {
    this.setState(s => ({
      current:s.current === reviews.length - 1 ? 0 : s.current + 1
    }))
  }

  render(){

    const {current} = this.state
    const review = reviews[current]

    return(
      <div className='reviews'>
        <p className='about-tit'>Отзывы</p>

        <div className='review-card'>

          <p className='review-date'>
            {review.date}
          </p>

          <p className='review-text'>
            {review.text}
          </p>

          <p className='review-name'>
            {review.name}
          </p>

          <div className='review-footer'>

            <div className='steps-indicator'>
              {reviews.map((_,i)=>(
                <div
                  key={i}
                  className={'step-bar'+(i===current?' active':'')}
                  onClick={()=>this.setState({current:i})}
                />
              ))}
            </div>

            <div className='quiz-arrows'>

              <button 
                className='arrow-btn arrow-prev'
                onClick={this.prev}
              >
                <svg width='18' height='18' viewBox='0 0 20 20'>
                  <path 
                    d='M13 16L7 10L13 4'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>

              <button 
                className='arrow-btn arrow-next'
                onClick={this.next}
              >
                <svg width='18' height='18' viewBox='0 0 20 20'>
                  <path 
                    d='M7 4L13 10L7 16'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>

            </div>

          </div>

        </div>

      </div>
    )
  }
}