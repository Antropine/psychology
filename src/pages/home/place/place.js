import React, { Component } from 'react'
import './place.css'

export default class Place extends Component {

  carusel = [
    { img: 'images/place3.jpg' },
    { img: 'images/place5.jpg' },
    { img: 'images/place4.jpg' },
  ]

  state = {
    current: 0
  }

  touchStartX = 0

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

  onTouchStart = (e) => {
    this.touchStartX = e.changedTouches[0].clientX
  }

  onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - this.touchStartX
    if (Math.abs(dx) < 40) return
    if (dx > 0) this.prev()
    else this.next()
  }

  render() {
    const { current } = this.state
    const len = this.carusel.length
    const prevIdx = (current - 1 + len) % len
    const nextIdx = (current + 1) % len

    return (
      <div className='place' id='place'>
        <h2>В центре спокойно</h2>
        <p className='place-text'>Наш центр — это пространство, где можно быть собой и меняться в своем темпе</p>

        <div
          className='carousel'
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
        >

          <div className='carousel-side' onClick={this.prev}>
            <img src={this.carusel[prevIdx].img} alt='предыдущий' />
          </div>

          <div className='carousel-center'>
            <img src={this.carusel[current].img} alt={this.carusel[current].title} />
          </div>

          <div className='carousel-side' onClick={this.next}>
            <img src={this.carusel[nextIdx].img} alt='следующий' />
          </div>

        </div>
      </div>
    )
  }
}
