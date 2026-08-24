import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './certificates.css'

const CERT_COUNTS = {
  arina: 6,
  ulia: 9
}

function getCertificates(specialist) {
  const count = CERT_COUNTS[specialist] || 0
  return Array.from({ length: count }, (_, i) => (
    `/images/sert/sert${i + 1}_${specialist}.png`
  ))
}

export default function Certificates({ specialist }) {
  const images = getCertificates(specialist)
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)

  const prev = () => {
    setCurrent(i => (i - 1 + images.length) % images.length)
  }

  const next = () => {
    setCurrent(i => (i + 1) % images.length)
  }

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, images.length])

  if (!images.length) return null

  const gallery = open && createPortal(
    <div
      className='sert-overlay'
      onClick={() => setOpen(false)}
    >
      <div
        className='sert-gallery'
        onClick={e => e.stopPropagation()}
        onTouchStart={e => setTouchStartX(e.changedTouches[0].clientX)}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - touchStartX
          if (Math.abs(dx) < 40) return
          if (dx > 0) prev()
          else next()
        }}
      >
        <button
          className='sert-close'
          type='button'
          onClick={() => setOpen(false)}
          aria-label='Закрыть'
        >
          ×
        </button>

        <button
          className='sert-nav sert-prev'
          type='button'
          onClick={prev}
          aria-label='Предыдущий'
        >
          <img src='/images/left_arrow.svg' alt='' />
        </button>

        <img
          className='sert-image'
          src={images[current]}
          alt={`Сертификат ${current + 1}`}
        />

        <button
          className='sert-nav sert-next'
          type='button'
          onClick={next}
          aria-label='Следующий'
        >
          <img src='/images/right_arrow.svg' alt='' />
        </button>

        <p className='sert-counter'>{current + 1} / {images.length}</p>
      </div>
    </div>,
    document.body
  )

  return (
    <div className='sertificates'>
      <button type='button' onClick={() => { setCurrent(0); setOpen(true) }}>
        Посмотреть сертификаты
      </button>
      {gallery}
    </div>
  )
}
