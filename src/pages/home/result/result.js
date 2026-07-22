import React, { Component } from 'react'
import './result.css'
import BlueCloudSvg from './assets/blue_cloud.svg'
import WhiteCloudSvg from './assets/white_cloud.svg'
import cloud1 from './assets/cloud1.svg'
import cloud2 from './assets/cloud2.svg'
import cloud3 from './assets/cloud3.svg'
import cloud4 from './assets/cloud4.svg'
import cloud5 from './assets/cloud5.svg'
import cloud6 from './assets/cloud6.svg'

export default class Result extends Component {
  render() {
    return (
      <div className='result' id='result'>
        <h2>Психолог может помочь</h2>
        <div className='result-section'>
          <div className='left-cloud'>
            <div className='cloud-item'>
              <img src={cloud1} alt='' />
            </div>
            <div className='cloud-item'>
              <img src={cloud2} alt='' />
            </div>
            <div className='cloud-item'>
              <img src={cloud3} alt='' />
            </div>
          </div>
          <div className='result-image'>
            <img src='images/calm.png' alt='медитация' />
          </div>
          <div className='right-cloud'>
            <div className='cloud-item'>
              <img src={cloud4} alt='' />
            </div>
            <div className='cloud-item'>
              <img src={cloud5} alt='' />
            </div>
            <div className='cloud-item'>
              <img src={cloud6} alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
