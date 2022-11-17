import { useSelector } from 'react-redux';

import { JobDate } from '../';
import s from './JobIntro.module.css';

const JobIntro = () => {
  const { currentJob } = useSelector(state => state.jobs);

  const getSalary = salaryAmount => {
    const salaryRange = salaryAmount.replaceAll('k', ' 000');
    return salaryRange;
  };

  const salary = getSalary(currentJob.salary);

  return (
    <div className={s.job}>
      <h2 className={s.job__title}>{currentJob.title}</h2>
      <JobDate date={currentJob.createdAt} />

      <div className={s.salary}>
        <p className={s.salary__text}>Brutto, per year</p>
        <p className={s.salary__number}>€ {salary}</p>
      </div>
    </div>
  );
};

export default JobIntro;
