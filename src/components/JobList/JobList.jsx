import { useSelector } from 'react-redux';

import s from './JobList.module.css';
import svg from '../../images/sprite.svg';

const JobList = () => {
  const { items } = useSelector(state => state.jobs);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.item__photo}>{/* <img src="" alt="" /> */}</div>

        <div className={s.info}>
          <div className={s.actions}>
            <div className={s.actions__rating}></div>

            <div className={s.actions__sidebox}>
              <button className={s.actions__button}>
                <svg className={s.actions__icon} width="32" height="32">
                  <use href={`${svg}#icon-saveBookmark`}></use>
                </svg>
              </button>
              <p className={s.actions__date}>Posted 2 days ago</p>
            </div>
          </div>

          <div className={s.text}>
            <h2 className={s.text__title}>
              <a href="/999" className={s.text__link}>
                Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
                Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
                Fachärztin für Arbeitsmedizin (m/w/d)
              </a>
            </h2>
            <p className={s.text__name}>
              Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
            </p>
            <p className={s.text__address}>Vienna, Austria</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default JobList;
