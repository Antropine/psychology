import React, { Component } from 'react'
import Map from '../home/map/map'
import { Helmet } from 'react-helmet-async';

export default class Contacts extends Component {
  render() {
    return (
      <>
      <Helmet>
        <title>Контакты психологического центра «Искра»</title>
        <meta name="description" content="Психологический центр «Искра» всегда на связи. Ждем вас на консультации в уютном офисе. Запишитесь по телефону, через мессенджеры или форму на сайте. Ответим на вопросы и подберем специалиста. Адрес, график работы и карта — ниже на странице."/>
      </Helmet>

      <div className='contacts' id='contacts'>
        <Map/>
      </div>
      </>
    )
  }
}
