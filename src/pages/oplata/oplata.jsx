import { useState } from 'react';
import Select from 'react-select';
import './oplata.css';

export default function Oplata() {
  const qrCodes = {
    2500: "/images/alfa-qr-2500.png",
    3000: "/images/alfa-qr-3000.png",
    3500: "/images/alfa-qr-3500.png",
    4000: "/images/alfa-qr-4000.png",
    4500: "/images/alfa-qr-4500.png",
    5000: "/images/alfa-qr-5000.png",
    6000: "/images/alfa-qr-6000.png",
  };

  const options = [
    { value: 2500, label: '2500 ₽' },
    { value: 3000, label: '3000 ₽' },
    { value: 3500, label: '3500 ₽' },
    { value: 4000, label: '4000 ₽' },
    { value: 4500, label: '4500 ₽' },
    { value: 5000, label: '5000 ₽' },
    { value: 6000, label: '6000 ₽' },
  ];

  const [amount, setAmount] = useState({
    value: 4000,
    label: '4000 ₽'
  });

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCodes[amount.value];
    link.download = `QR-${amount.value}.png`;
    link.click();
  };

  return (
    <div className="oplata">
      <h2>Оплата</h2>

      <p className="oplata-subtitle">
        <img src="images/heart.svg" alt="сердце" />
        Выберите нужную сумму QR-кода
      </p>

      <div className="oplata-div">
        <div className="oplata-qr">
          <Select
            value={amount}
            onChange={(selected) => setAmount(selected)}
            options={options}
            className="amount-select"
            classNamePrefix="amount"
            isSearchable={false}
          />

          <div className="qr-img">
            <img src={qrCodes[amount.value]} alt="QR" />
          </div>

          <button onClick={downloadQR}>
            скачать QR
          </button>
        </div>

        <div className='oplata-iskra'>
          <img src="images/iskra_oplata.png" alt="Искра" />
        </div>
      </div>

      <div className='oplata-steps'>
        <div className='oplata-step'>
          <p><b>1</b> Сканируйте QR код с помощью банковского приложения</p>
        </div>
        <div className='oplata-step'>
          <p><b>2</b> Важно! В поле назначения платежа заполнить данные!</p>
        </div>
        <div className='oplata-step'>
          <p><b>3</b> № ДОГОВОРА, Без НДС</p>
        </div>
      </div>

      <div className='reqviziti_block'>
        <h2>Реквизиты для оплаты</h2>
        <div className='reqviziti'>
          <p>ООО «Грация»<br/>
          ИНН 6670429660<br/>
          КПП 667001001<br/>
          р/с 40702810238060004556<br/>
          ФИЛИАЛ «ЕКАТЕРИНБУРГСКИЙ» АО «АЛЬФА-БАНК»<br/>
          БИК 046577964</p>
           <div>
            <p><b>Заполните значение платежа по примеру:</b></p>
            <p>Оплата по договору №, Без НДС</p>
          </div>
        </div>
      </div>
    </div>
  );
}