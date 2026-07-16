import { useState } from 'react'
import './form.css'

export default function Form({title = 'Форма записи'}) {
  const [telegram,setTelegram] = useState('')
  const [phone,setPhone] = useState('')

  const sendForm = async(e)=>{
    e.preventDefault()

    const response = await fetch('/send.php',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        telegram,
        phone
      })
    })

    const result = await response.json()

    if(result.success){
      alert('Заявка отправлена')
      setTelegram('')
      setPhone('')
    }
  }

  return(
    <div className='form-section' id='form'>
      <h2>{title}</h2>

      <div className='main-form'>
        <form className='form' onSubmit={sendForm}>

          <textarea
            placeholder='Ник в Telegram'
            value={telegram}
            onChange={(e)=>setTelegram(e.target.value)}
          />

          <textarea
            placeholder='Номер телефона*'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <div>
            <input type="checkbox" id="policy" required/>
            <label htmlFor="policy">
              <a href='/policy'>Я соглашаюсь с политикой конфиденциальности</a>
            </label>
          </div>

          <div>
            <input type="checkbox" id="data" required/>
            <label htmlFor="data">
              <a href='/agreement'>Я соглашаюсь на обработку персональных данных</a>
            </label>
          </div>

          <button type='submit'>
            оставить заявку
          </button>

        </form>

        <img src='/images/worry_person.png' alt="person"/>
      </div>
    </div>
  )
}