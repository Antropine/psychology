import React, { Component } from 'react'
import './result.css'
import BlueCloudSvg from './assets/blue_cloud.svg'
import WhiteCloudSvg from './assets/white_cloud.svg'

export default class Result extends Component {
  render() {
    return (
      <div className='result' id='result'>
        <h2>В результате с психологом вы сможете</h2>
        <div className='result-section'>
          <div className='left-cloud'>
            <div className='cloud-item'>
              <img src={BlueCloudSvg} alt='' />
              <div className='cloud-center cloud-center--white'>
                <p>Научиться регулировать эмоции, <span className='white-mars'>бережно</span> и <span className='white-mars'>чутко</span> относиться к себе и своему жизненному опыту</p>
              </div>
            </div>
            <div className='cloud-item'>
              <img src={WhiteCloudSvg} alt='' />
              <div className='cloud-center'>
                <p><span className='blue-mars'>Научиться</span> работать с тревогой и страхами</p>
              </div>
            </div>
            <div className='cloud-item'>
              <img src={BlueCloudSvg} alt='' />
              <div className='cloud-center cloud-center--white'>
                <p>Прожить <span className='white-mars'>перемены:</span> переезд, расставание, развод</p>
              </div>
            </div>
          </div>
          <div className='result-image'>
            <img src='images/calm.png' alt='медитация' />
          </div>
          <div className='right-cloud'>
            <div className='cloud-item'>
              <img src={WhiteCloudSvg} alt='' />
              <div className='cloud-center'>
                <p>Стать устойчивее и <span className='blue-mars'>увереннее</span> в себе и точно определять свои потребности</p>
              </div>
            </div>
            <div className='cloud-item'>
              <img src={BlueCloudSvg} alt='' />
              <div className='cloud-center cloud-center--white'>
                <p><span className='white-mars'>Почувствовать</span> радость и <span className='white-mars'>наслаждение</span> от жизни</p>
              </div>
            </div>
            <div className='cloud-item'>
              <img src={WhiteCloudSvg} alt='' />
              <div className='cloud-center'>
                <p>Выстраивать гармоничные <span className='blue-mars'>отношения</span> с близкими людьми</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
