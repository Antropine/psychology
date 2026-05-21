import React, { Component } from 'react'
import './result.css'

export default class result extends Component {
  render() {
    return (
      <div className='result'>
        <h2>В результате с психологом вы сможете</h2>
        <div className='result-section'>
            <div className='left-cloud'>
                <div className='blue-cloud'>Научиться регулировать эмоции, <span className='white-mars'>бережно</span> и <span className='white-mars'>чутко</span> относиться к себе и своему жизненному опыту</div>
                <div className='white-cloud'>Научиться работать с тревогой и <span className='blue-mars'>преодолеть</span> страхи</div>
                <div className='blue-cloud'>Прожить <span className='white-mars'>перемены:</span> переезд, расставание, развод</div>
            </div>
            <div>
                <img src='images/calm.png' alt='медитация'></img>
            </div>
            <div className='right-cloude'>
                <div className='white-cloud'>Стать устойчивее и <span className='blue-mars'>увереннее</span> в себе и точно определять свои потребности</div>
                <div className='blue-cloud'><span className='white-mars'>Почувствовать</span> радость и <span className='white-mars'>наслаждение</span> от жизни</div>
                <div className='white-cloud'>Выстраивать гармоничные <span className='blue-mars'>отношения</span> с близкими людьми</div>
            </div>
        </div>
      </div>
    )
  }
}
