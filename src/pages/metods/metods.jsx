import React, { Component } from 'react'
import './metods.css'

export default class metods extends Component {
  render() {
    return (
      <div className='metods'>
        <h2>Используем в работе<br/>доказательные методики</h2>
        <div className='metods-grid'>
            <div className='metod-card'>
                <p className='metod-title'>Когнитивно-поведенческая терапия (КПТ)</p>
                <p className='metod-text'>Понять, как мысли влияют на эмоции и поведение, и приобрести полезные навыки, чтобы самостоятельно использовать их в жизни. Эффективна в решении большинства запросов клиентов.</p>
            </div>
            <div className='metod-card'>
                <p className='metod-title'>Терапия принятия и ответственности (ACT)</p>
                <p className='metod-text'>Научиться строить жизнь в соответствии со своими ценностями и быть психологически гибким.</p>
            </div>
            <div className='metod-card'>
                <p className='metod-title'>Терапия, сфокусированная на сострадании (CFT)</p>
                <p className='metod-text'>Может помочь человеку с выраженной самокритикой, чувством стыда и трудностями в принятии себя.</p>
            </div>
            <div className='metod-card'>
                <p className='metod-title'>Диалектическая поведенческая терапия (DBT)</p>
                <p className='metod-text'>Научиться работать с сильными эмоциями и приобрести конкретные навыки для саморегуляции.</p>
            </div>
            <div className='metod-card'>
                <p className='metod-title'>Схема-терапия</p>
                <p className='metod-text'>Выявить и изменить глубинные установки. Особенно эффективна при работе с эмоциональными трудностями и повторяющимся поведением.</p>
            </div>

        </div>
      </div>
    )
  }
}
