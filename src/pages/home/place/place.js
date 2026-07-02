import React, { Component } from 'react'
import './place.css'

export default class place extends Component {

  carusel = [
    { title: 'Адрес 1', img: 'images/photo1.png' },
    { title: 'Адрес 2', img: 'images/photo2.png' },
    { title: 'Адрес 3', img: 'images/photo3.png' },
  ]

  state = {
    current: 0
  }

  prev = () => {
    this.setState(s => ({
      current: (s.current - 1 + this.carusel.length) % this.carusel.length
    }))
  }

  next = () => {
    this.setState(s => ({
      current: (s.current + 1) % this.carusel.length
    }))
  }

  render() {
    const { current } = this.state
    const len = this.carusel.length
    const prevIdx = (current - 1 + len) % len
    const nextIdx = (current + 1) % len

    return (
      <div className='place' id='place'>
        <h2>В центре уютно и спокойно</h2>
        <p className='place-text'>Наш центр — это пространство, где можно быть собой и меняться в своем темпе</p>

        <div className='carousel'>

          <div className='carousel-side' onClick={this.prev}>
            <img src={this.carusel[prevIdx].img} alt='предыдущий' />
          </div>

          <div className='carousel-center'>
            <img src={this.carusel[current].img} alt={this.carusel[current].title} />
            <p className='carousel-title'>{this.carusel[current].title}</p>
          </div>

          <div className='carousel-side' onClick={this.next}>
            <img src={this.carusel[nextIdx].img} alt='следующий' />
          </div>

        </div>
      </div>
    )
  }
}
