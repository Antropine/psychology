import React, { Component } from 'react'
import './faq.css'

export default class Faq extends Component {
  faq = [
    {
      title: 'Кто такой психолог?',
      answers: 'Тревога, стресс',
    },
    {
      title: 'С какого возраста можно записаться?',
      answers: 'Тревога, стресс',
    },
    {
      title: 'Есть ли у специалистов образование?',
      answers: 'Нет, мы так с улицы взяли, кто за еду согласился работать',
    },
    {
      title: 'Как отменить или перенести консультацию?',
      answers: 'Тревога, стресс',
    },
    {
      title:
        'Что делать, если не устраивает специалист, к которому я хожу на консультации?',
      answers: 'Тревога, стресс',
    },
    {
      title: 'Как понять, что психотерапия помогает?',
      answers: 'Тревога, стресс',
    },
    {
      title:
        'В чем разница между психологом, психотерапевтом и психиатром?',
      answers: 'Тревога, стресс',
    },
    {
      title: 'Как добраться?',
      answers: 'Тревога, стресс',
    },
    {
      title: 'Сколько стоит консультация со специалистом?',
      answers: 'Тревога, стресс',
    },
  ]

  state = {
    openIndex: null,
  }

  toggleFaq = (index) => {
    this.setState({
      openIndex: this.state.openIndex === index ? null : index,
    })
  }

  render() {
    return (
      <div className='faq'>
        <h2>FAQ</h2>
        {this.faq.map((item, index) => (
          <div key={index} className='faq-item'>
            <p
              className='faq-title'
              onClick={() => this.toggleFaq(index)}
            >
              {item.title} <img src='images/faq_arrow.svg'></img>
            </p>

            {this.state.openIndex === index && (
              <div className='faq-answer'>
                <p>{item.answers}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
}