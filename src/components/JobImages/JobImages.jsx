import { useSelector } from 'react-redux';

import { Title } from '../';
import s from './JobImages.module.css';

const JobImages = () => {
  const { currentJob } = useSelector(state => state.jobs);

  return (
    <section className={s.section}>
      <Title>Attached images</Title>
      <ul className={s.list}>
        {currentJob.pictures.map((item, index) => (
          <li key={`picture${index}`} className={s.item}>
            <img
              src={item}
              alt={`${currentJob.name}_${index}`}
              height="300"
              className={s.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobImages;
