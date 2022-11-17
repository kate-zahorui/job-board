import { useParams, useLocation } from 'react-router-dom';

import s from './JobDate.module.css';

const JobDate = ({ date }) => {
  const location = useLocation();
  const dateClass = location.pathname === '/' ? 'list__date' : 'job__date';

  const getFullDays = ms => {
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(ms / day);

    return days;
  };

  const getPublicationDate = time => {
    if (!time) return;

    const currentTime = Date.now();
    const publicationDate = new Date(date);
    const publicationTime = publicationDate.getTime();

    const daysPassed = getFullDays(currentTime - publicationTime);

    if (daysPassed === 0) {
      return 'today';
    }
    return `${daysPassed} days ago`;
  };

  const daysPassed = getPublicationDate(date);

  return (
    <time dateTime={date} className={s[dateClass]}>
      Posted&#160;
      {daysPassed}
    </time>
  );
};

export default JobDate;
