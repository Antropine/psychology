import React, { Component } from 'react'
import './page_404.css'

export default class page_404 extends Component {
  render() {
    return (
      <div className='page_404'>
          <p  className='title_404'>Страница не найдена</p>
          <p className='subtitle_404'>Кажется, вы заблудились. Такой страницы не существует, или она была перемещена</p>
          <img src='images/404.png' alt='404'></img>
          <div className='button'>
            <a href='/'>вернуться на главную</a>
          </div>
          <div className='grust'>
              <img src='images/gryst.png'alt='грусть'></img>
          </div>
      </div>
    )
  }
}
