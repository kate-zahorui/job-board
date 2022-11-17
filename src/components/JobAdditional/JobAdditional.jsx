import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Title } from '../';
import s from './JobAdditional.module.css';

const JobAdditional = () => {
  const { currentJob } = useSelector(state => state.jobs);
  const { jobId } = useParams();

  return (
    <section className={s.section}>
      <Title>Additional info</Title>

      {currentJob.employment_type && (
        <section className={s.employment}>
          <h3 className={s.employment__title}>Employment type</h3>
          <ul className={s.employment__list}>
            {currentJob.employment_type.map((item, index) => (
              <li
                key={`${jobId}employment${index}`}
                className={s.employment__item}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {currentJob.benefits && (
        <section className={s.benefits}>
          <h3 className={s.benefits__title}>Benefits</h3>
          <ul className={s.benefits__list}>
            {currentJob.benefits.map((item, index) => (
              <li key={`${jobId}benefits${index}`} className={s.benefits__item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default JobAdditional;
