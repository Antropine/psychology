import { useEffect, useState } from 'react'
import './cookie.css'

export default function Cookie() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted')

    if (!cookieAccepted) {
      setShow(true)
    }
  }, [])

  const acceptCookie = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookie">
      <p>Мы используем <a className='cookie-link' href='/cookie'>куки</a> и <a className='cookie-link' href='/cookie'>рекомендательные технологии</a> — без них сайт просто не сможет нормально работать</p>
      <button onClick={acceptCookie}>
        хорошо
      </button>
    </div>
  )
}