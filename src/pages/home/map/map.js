import React, { Component } from 'react'
import './map.css'
import { GoArrowRight } from "react-icons/go";

export default class Map extends Component {
  render() {
    return (
      <div className='map-section'>
        <h2>Контакты</h2>
        <div className='map' id='map'>
          <div className='address-text'>
            <div className='address-item'>
              <p><b>Адрес</b></p>
              <p>г. Екатеринбург, ул. Малышева, 51, БЦ «Высоцкий»</p>
            </div>
            <div className='address-item'>
              <p><b>ВКонтакте:</b></p>
              <a href='https://vk.ru/iskra_psycenter'>Написать в VK <GoArrowRight /></a>
            </div>
            <div className='address-item'>
              <p><b>МAX:</b></p>
              <a href='https://max.ru/u/f9LHodD0cOIhJjPwMBW_HDyIkUGHf8Q5i_e-Tj2UgMTqlOh5eQlo4or6CUQ'>Написать в MAX <GoArrowRight /></a>
            </div>
            <div className='address-item'>
              <p><b>Telegram:</b></p>
              <a href='https://t.me/iskra_psycenter'>Написать в Telegram <GoArrowRight /></a>
              <p>@iskra_psycenter</p>
            </div>
            <div className='address-item'>
              <p><b>Номер телефона:</b></p>
              <a href='tel:+79675422367'>+7 (967) 542-23-67</a>
            </div>
            <div className='address-item'>
              <p><b>График работы:</b></p>
              <p>ежедневно с 12:00 до 21:00 (<b>обязательна предварительная запись</b>)</p>
            </div>
          </div>
        <div className='map-frame'>
          <iframe
            src='https://yandex.ru/map-widget/v1/?ll=60.620997%2C56.834665&mode=search&oid=72831579293&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcV0IVZ%2FTE5AEUzD8BExa0xAEhIJZhNgWP582T8R1v1jIToExD8iBgABAgMEBSgKOABA25wGSAFiOnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZHZlcnRzL0N1c3RvbU1heGFkdi9FbmFibGVkPTFiOnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZHZlcnRzL0N1c3RvbU1heGFkdi9NYXhhZHY9MTViRHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZHZlcnRzL0N1c3RvbU1heGFkdi9SZWdpb25JZHM9WzEsMTAxNzRdYkByZWFycj1zY2hlbWVfTG9jYWwvR2VvdXBwZXIvQWR2ZXJ0cy9NYXhhZHZUb3BNaXgvTWF4YWR2Rm9yTWl4PTEwagJydZ0BzczMPaABAKgBAL0BnMwwGMIBHbfot%2Bj2BcS8jOIDnenmqI8CuN%2Fwq%2BgBl%2FCD3MMFggIK0JjRgdC60YDQsIoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=60.616264%2C56.834665&sspn=0.028592%2C0.011228&text=%D0%98%D1%81%D0%BA%D1%80%D0%B0&z=15.8'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Карта'
          />
        </div>
        </div>
      </div>
    )
  }
}
