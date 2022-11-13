import { Title } from '../';

import s from './JobAdditional.module.css';

const JobAdditional = () => {
  return (
    <section className={s.section}>
      <Title>Additional info</Title>
      <section className={s.employment}>
        <h3 className={s.employment__title}>Employment type</h3>
        <ul className={s.employment__list}>
          <li className={s.employment__item}>Full time</li>
          <li className={s.employment__item}>Part time</li>
          <li className={s.employment__item}>Temporary</li>
        </ul>
      </section>
      <section className={s.benefits}>
        <h3 className={s.benefits__title}>Benefits</h3>
        <ul className={s.benefits__list}>
          <li className={s.benefits__item}>Flexible shedule</li>
          <li className={s.benefits__item}>Relocation assistance</li>
        </ul>
      </section>
    </section>
  );
};

export default JobAdditional;
