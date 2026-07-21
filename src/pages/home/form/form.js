import { useState } from 'react'
import './form.css'
import { Link } from 'react-router-dom'

export default function Form({ title = 'Форма записи' }) {
  const [telegram, setTelegram] = useState('')
  const [phone, setPhone] = useState('')
  const [success, setSuccess] = useState(false)
  const [policy, setPolicy] = useState(false)
  const [data, setData] = useState(false)
  const [error, setError] = useState('')

  const showError = (message) => {
    setError(message)
    setTimeout(() => setError(''), 3000)
  }

  const sendForm = async (e) => {
    e.preventDefault()

    if (!phone.trim()) {
      showError('Введите номер телефона')
      return
    }

    if (!policy || !data) {
      showError('Необходимо согласиться с политикой конфиденциальности и обработкой данных')
      return
    }

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telegram,
          phone
        })
      })

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        setTelegram('')
        setPhone('')
      }
    } catch (error) {
      showError('Ошибка отправки. Попробуйте позже')
    }
  }

  return (
    <div className='form-section' id='form'>
      {error && (
        <div className="toast-error">
          {error}
        </div>
      )}

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
              onChange={(e) => setTelegram(e.target.value)}
            />

            <textarea
              type="tel"
              placeholder='Номер телефона*'
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            />

            <div className="policy-block">
              <input
                type="checkbox"
                id="policy"
                checked={policy}
                onChange={(e) => setPolicy(e.target.checked)}
              />
              <label htmlFor="policy">
                <Link className="policy_link" to="/policy">
                  Я соглашаюсь с политикой конфиденциальности
                </Link>
              </label>
            </div>

            <div className="policy-block">
              <input
                type="checkbox"
                id="data"
                checked={data}
                onChange={(e) => setData(e.target.checked)}
              />
              <label htmlFor="data">
                <Link className="policy_link" to="/agreement">
                  Я соглашаюсь на обработку персональных данных
                </Link>
              </label>
            </div>

            <button type="submit">
              оставить заявку
            </button>
          </form>
        )}

        <img src='/images/ponimanie.svg' alt="понимание"/>
      </div>
    </div>
  )
}