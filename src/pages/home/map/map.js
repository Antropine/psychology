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
              <p><b>Telegram:</b></p>
              <a href='https://t.me/iskra_psycenter'>Перейти в Telegram <GoArrowRight /></a>
            </div>
            <div className='address-item'>
              <p><b>МAX:</b></p>
              <a href='https://max.ru/u/f9LHodD0cOIhJjPwMBW_HDyIkUGHf8Q5i_e-Tj2UgMTqlOh5eQlo4or6CUQ'>Перейти в MAX <GoArrowRight /></a>
            </div>
            <div className='address-item'>
              <p><b>График работы:</b></p>
              <p>ежедневно с 12:00 до 21:00 (<b>обязательна предварительная запись</b>)</p>
            </div>
          </div>
        <div className='map-frame'>
          <iframe
            src='https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=60.615709%2C56.835969&mode=search&oid=1016292298&ol=biz&sctx=ZAAAAAgBEAAaKAoSCRO6S%2BKsTk5AEaT%2BeoUFa0xAEhIJdlPKayV0hz8RH73hPnJrcj8iBgABAgMEBSgKOABA25wGSAFiPHJlbGV2X3Bpbl9zdWJ0aXRsZV9tdWx0aWNsYXNzPXBpbl9zdWJ0aXRsZV9tdWx0aWNsYXNzX2ZtbF92M2I6cmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvQ3VzdG9tTWF4YWR2L0VuYWJsZWQ9MWI6cmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvQ3VzdG9tTWF4YWR2L01heGFkdj0xNWJEcmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvQ3VzdG9tTWF4YWR2L1JlZ2lvbklkcz1bMSwxMDE3NF1iQHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZHZlcnRzL01heGFkdlRvcE1peC9NYXhhZHZGb3JNaXg9MTBqAnJ1nQHNzMw9oAEAqAEAvQGALT2lwgEQysfN5AOrzr3BBPeVx7CcAoICENCy0YvRgdC%2B0YbQutC40LmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=60.615709%2C56.835969&sspn=0.005054%2C0.002967&text=%D0%B2%D1%8B%D1%81%D0%BE%D1%86%D0%BA%D0%B8%D0%B9&z=17.72'
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
