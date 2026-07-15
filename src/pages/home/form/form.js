import React, { Component } from 'react'
import './form.css'

export default class form extends Component {
  render() {
    return (
      <div className='form-section' id='form'>
        <h2>Форма записи</h2>
            <div className='main-form'>
                <div className='form'>
                    <textarea placeholder='Ник в Telegram'></textarea>
                    <textarea placeholder='Номер телефона*'></textarea>
                    <div>
                        <input type="checkbox" id="policy" name="poilcy" checked />
                        <label for="scales">Я соглашаюсь с политикой конфиденциальности</label>
                    </div>
                    <div>
                        <input type="checkbox" id="policy" name="poilcy" checked />
                        <label for="scales">Я соглашаюсь на обработку персональных данных</label>
                    </div>
                    <button type='submit'>оставить заявку</button>
                </div>
                <div>
                    <img src='images/worry_person.png'></img>
                </div>
            </div>
      </div>
    )
  }
}
