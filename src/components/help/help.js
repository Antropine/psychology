import React, { Component } from 'react'
import './help.css'

export default class Help extends Component {
  render() {
    return (
      <div className='help'>
        <h2>Мы поможем с выбором специалиста</h2>
        <div className='form'>
        <textarea placeholder='Номер телефона'></textarea>
          <div>
            <input type="checkbox" id="policy" name="poilcy" checked />
            <label for="scales">Согласие на обработку персональных данных</label>
          </div>
          <button type='submit'>оставить заявку</button>
        </div>
      </div>
    )
  }
}
