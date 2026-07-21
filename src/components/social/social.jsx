import './social.css';

export default function SocialButtons() {
  return (
    <div className="social-buttons">
      <a
        href="https://t.me/iskra_psycenter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Телеграм"
      >
        <img src='images/tg.svg' alt='тг'></img>
      </a>

      <a
        href="https://vk.ru/iskra_center"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vk"
      >
        <img src='images/vk.svg' alt='вк'></img>
      </a>

      <a
        href="https://max.ru/u/f9LHodD0cOIhJjPwMBW_HDyIkUGHf8Q5i_e-Tj2UgMTqlOh5eQlo4or6CUQ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Max"
      >
        <img src='images/max.svg' alt='макс'></img>
      </a>
    </div>
  );
}