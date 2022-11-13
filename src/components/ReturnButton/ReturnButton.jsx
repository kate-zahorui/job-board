import s from './ReturnButton.module.css';
import svg from '../../images/sprite.svg';

const ReturnButton = () => {
  return (
    <button className={s.button}>
      <svg className={s.icon} width="10" height="18">
        <use href={`${svg}#icon-returnArrow`}></use>
      </svg>
      <span className={s.text}>Return to job board</span>
    </button>
  );
};

export default ReturnButton;
