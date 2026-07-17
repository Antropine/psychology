import { useState } from 'react'
import './form.css'

export default function Form({title = 'Форма записи'}) {
  const [telegram,setTelegram] = useState('')
  const [phone,setPhone] = useState('')
  const [success,setSuccess] = useState(false)
  const [policy,setPolicy] = useState(false)
  const [data,setData] = useState(false)
  const [error,setError] = useState('')

  const sendForm = async(e)=>{
    e.preventDefault()

    if(!policy || !data){
      setError('Необходимо согласиться с политикой конфиденциальности и обработкой данных')
      return
    }

    setError('')

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
      setSuccess(true)
      setTelegram('')
      setPhone('')
    }
  }

  return(
    <div className='form-section' id='form'>
      <h2>{title}</h2>

      <div className='main-form'>

        {success ? (
          <div className="success-message">
            <h2>Спасибо!</h2>
            <p>
              Ваша заявка находится в обработке.<br/>
              Мы свяжемся с вами в ближайшее время.
            </p>
            <span>
              График работы центра: ежедневно с 12:00 до 21:00
            </span>
          </div>
        ) : (

        <form className='form' onSubmit={sendForm}>

          <textarea
            placeholder='Ник в Telegram'
            value={telegram}
            onChange={(e)=>setTelegram(e.target.value)}
          />

          <textarea
            placeholder='Номер телефона*'
            value={phone}
            onChange={(e)=>{
              setPhone(e.target.value.replace(/\D/g, ''))
            }}
          />

          <div className="policy-block">
            <input 
              type="checkbox" 
              id="policy"
              checked={policy}
              onChange={(e)=>setPolicy(e.target.checked)}
            />
            <label htmlFor="policy">
              <a className="policy_link" href="/policy">
                Я соглашаюсь с политикой конфиденциальности
              </a>
            </label>
          </div>

          <div className="policy-block">
            <input 
              type="checkbox" 
              id="data"
              checked={data}
              onChange={(e)=>setData(e.target.checked)}
            />
            <label htmlFor="data">
              <a className="policy_link" href="/agreement">
                Я соглашаюсь на обработку персональных данных
              </a>
            </label>
          </div>
          {error && (
            <p className="form-error">
              {error}
            </p>
          )}
          <button type='submit'>оставить заявку</button>
        </form>
        )}

        <img src='/images/ponimanie.svg' alt="понимание"/>

      </div>
    </div>
  )
}