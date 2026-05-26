import React, { Component } from 'react'
import './about.css'

export default class about extends Component {

  maskot = [
    {
      name: "Радость",
      info: "текст о радости",
      img: 'images/happy.png',
    },
    {
      name: "Тревожность",
      info: "текст о тревожности",
      img: 'images/worry.png',
    },
    {
      name: "Страх",
      info: "текст о страхе",
      img: 'images/worry.png',
    }
  ]

  state = {
    current: 0
  }

  prev = () => {
    this.setState(s => ({
      current: (s.current - 1 + this.maskot.length) % this.maskot.length
    }))
  }

  next = () => {
    this.setState(s => ({
      current: (s.current + 1) % this.maskot.length
    }))
  }

  render() {
    return (
      <div className='about'>
        <div className='about-hero'>
            <div className='about-text'>
                <h2>О нас</h2>
                <p>Современный психологический центр «Искра» в Екатеринбурге: очные консультации с психологом для людей старше 18 лет. К нам можно обратиться с такими вопросами, как тревога, принятие себя, страхи, апатия, нестабильность в жизни, стресс на работе.</p>
                <p>Также мы проводим групповую терапию и тренинги по управлению гневом, преодолению тревоги.</p>
                <p>Все наши психологи имеют высшее психологическое образование и используют в работе только научно-обоснованные методы психотерапии — КПТ, ACT, CFT и DBT. Каждый специалист с пониманием и без осуждения поможет разобраться в вашем вопросе и прийти вместе к его решению.</p>
            </div>
            <div className='about-img'>
            <img src='images/blue_person.png' alt='Голубая искра'></img>
            </div>
        </div>

        <div className='address-card'>
            <div className='adress'>
              <div className='map'>
                <div className='map-wrapper'>
                  <a href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps">Екатеринбург</a>
                  <a href="https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_malysheva_51/YkkYcAZkT0AHQFtsfXRyd31jYg==/?indoorLevel=1&ll=60.614755%2C56.836161&utm_medium=mapframe&utm_source=maps&z=18.15">Улица Малышева, 51 — Яндекс Карты</a>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=60.614755%2C56.836161&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjA5NzExMRJw0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0YPQu9C40YbQsCDQnNCw0LvRi9GI0LXQstCwLCA1MSIKDWd1ckIVLVhjQg%2C%2C&z=18.15"
                    width="560"
                    height="400"
                    allowFullScreen={true}
                    className='map-iframe'
                    title="Яндекс Карты"
                  ></iframe>
                </div>
              </div>
              <p>Конкретный адресс</p>
            </div>
            <div className='adress'>
              <div className='map'>
                  <div className='map-wrapper'>
                  <a href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps">Екатеринбург</a>
                  <a href="https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_malysheva_51/YkkYcAZkT0AHQFtsfXRyd31jYg==/?indoorLevel=1&ll=60.614755%2C56.836161&utm_medium=mapframe&utm_source=maps&z=18.15">Улица Малышева, 51 — Яндекс Карты</a>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=60.614755%2C56.836161&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjA5NzExMRJw0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0YPQu9C40YbQsCDQnNCw0LvRi9GI0LXQstCwLCA1MSIKDWd1ckIVLVhjQg%2C%2C&z=18.15"
                    width="560"
                    height="400"
                    allowFullScreen={true}
                    className='map-iframe'
                    title="Яндекс Карты"
                  ></iframe>
                </div>
              </div>
              <p>Конкретный адресс</p>
            </div>
            <div className='adress'>
              <div className='map'>
                <div className='map-wrapper'>
                  <a href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps">Екатеринбург</a>
                  <a href="https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_malysheva_51/YkkYcAZkT0AHQFtsfXRyd31jYg==/?indoorLevel=1&ll=60.614755%2C56.836161&utm_medium=mapframe&utm_source=maps&z=18.15">Улица Малышева, 51 — Яндекс Карты</a>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=60.614755%2C56.836161&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjA5NzExMRJw0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0YPQu9C40YbQsCDQnNCw0LvRi9GI0LXQstCwLCA1MSIKDWd1ckIVLVhjQg%2C%2C&z=18.15"
                    width="560"
                    height="400"
                    allowFullScreen={true}
                    className='map-iframe'
                    title="Яндекс Карты"
                  ></iframe>
                </div>
              </div>
              <p>Конкретный адресс</p>
            </div>
        </div>

      <div className='maskot'>
        <h2>Кто такой Маскот</h2>
        <div>
          <img src='#' alt='Искра маскот'></img>
        </div>
      </div>


      <div className='pluses'>
        <h2>Преимущества</h2>
        <p className='pluses-subtitle'>Какой-то текст</p>
        <div className='pluses-grid'>
          <div className='pluses-card'>
            <p>Заголовок</p>
            <p>Какой-то текст</p>
            <img src='#' alt='преимущстево'></img>
          </div>

          <div className='pluses-card'>
            <p>Заголовок</p>
            <p>Какой-то текст</p>
            <img src='#' alt='преимущстево'></img>
          </div>

          <div className='pluses-card'>
            <p>Заголовок</p>
            <p>Какой-то текст</p>
            <img src='#' alt='преимущстево'></img>
          </div>

          <div className='pluses-card'>
            <p>Заголовок</p>
            <p>Какой-то текст</p>
            <img src='#' alt='преимущстево'></img>
          </div>

          <div className='pluses-card'>
            <p>Заголовок</p>
            <p>Какой-то текст</p>
            <img src='#' alt='преимущстево'></img>
          </div>

          <div className='pluses-card'>
            <p>Заголовок</p>
            <p>Какой-то текст</p>
            <img src='#' alt='преимущстево'></img>
          </div>
        </div>
      </div>

      <div className='about-form'>
        <p>Приглашаем на первую встречу — чтобы познакомиться и понять, подходим ли мы вам.</p>
        <div className='form'>
        <textarea placeholder='Номер телефона'></textarea>
          <div>
            <input type="checkbox" id="policy" name="poilcy" checked />
            <label for="scales">Согласие на обработку персональных данных</label>
          </div>
          <button type='submit'>оставить заявку</button>
        </div>
      </div>


      <div className='kartochki'>
        <h2>Карточки</h2>
        <div className='kartochki-track'>
          {[0, 1].map(offset => {
            const item = this.maskot[(this.state.current + offset) % this.maskot.length]
            return (
              <div className='kartochki-card' key={offset}>
                <h3>{item.name}</h3>
                <p>{item.info}</p>
                <img src={item.img} alt={item.name} />
                <div className='button'>
                  <button className='kartochki-btn'>читать подробнее</button>
                </div>
              </div>
            )
          })}
        </div>
        <div className='kartochki-arrows'>
          <button className='kartochki-arrow' onClick={this.prev}><img src='images/left_arrow.svg' alt='назад'></img></button>
          <button className='kartochki-arrow' onClick={this.next}><img src='images/right_arrow.svg' alt='вперёд'></img></button>
        </div>
      </div>
    

      </div>
    )
  }
}
