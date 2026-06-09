import React, { Component } from 'react'
import './tests.css'

export default class tests extends Component {

    test =[
        {
            title: "Что такое проекция?",
            image: "/images/news1.png",
            content: "Проекция — это бессознательный психологический защитный механизм, при котором человек приписывает собственные неприемлемые мысли, чувства, желания или черты характера другим людям или внешнему миру, искренне веря, что они исходят извне, а не изнутри него",
        },
        {
            title: "Что такое проекция?",
             image: "/images/news1.png",
            content: "Проекция — это бессознательный психологический защитный механизм, при котором человек приписывает собственные неприемлемые мысли, чувства, желания или черты характера другим людям или внешнему миру, искренне веря, что они исходят извне, а не изнутри него",
        },
        {
            title: "Что такое проекция?",
             image: "/images/news1.png",
            content: "Проекция — это бессознательный психологический защитный механизм, при котором человек приписывает собственные неприемлемые мысли, чувства, желания или черты характера другим людям или внешнему миру, искренне веря, что они исходят извне, а не изнутри него",
        },
        {
            title: "Что такое проекция?",
             image: "/images/news1.png",
            content: "Проекция — это бессознательный психологический защитный механизм, при котором человек приписывает собственные неприемлемые мысли, чувства, желания или черты характера другим людям или внешнему миру, искренне веря, что они исходят извне, а не изнутри него",
        },
    ]

  render() {
    return (
      <div className='tests'>

        <div className='tests-hero'>
            <div className='tests-hero-text'>
                <h2>Тесты</h2>
                <p>Здесь вы можете пройти тесты</p>
            </div>
            <img src='images/iskra-test.png'></img>
        </div>
        

         <div className='article'>
            <h2>Непосредственно тесты</h2>
            <div className='news'>
                    {this.test.map((item, index) => (
                    <div className='news-card' key={index}>
                        <img src={item.image} className="news-img" alt={item.title} />
                        <p className='news-title'>{item.title}</p>
                        <p className='news-text'>{item.content}</p>
                        <a className='news-details' href='#'>узнать больше <img src='images/black_arrow.svg'></img></a>
                    </div>
                    ))}
            </div>
        </div>

      </div>
    )
  }
}
