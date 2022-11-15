import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getJobs } from '../../redux/jobs/jobsOperations';
import { Container, JobList } from '../../components';
import s from './JobBoard.module.css';

const JobBoard = () => {
  const { items, isLoading, error } = useSelector(state => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const showJobs = items.length > 0 && !error && !isLoading;
  const noJobs = items.length === 0 && !error && !isLoading;

  return (
    <main className={s.background}>
      <Container>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error. {error.message}</p>}

        {showJobs && <JobList />}
        {noJobs && <p>There're no jobs.</p>}
      </Container>
    </main>
  );
};

export default JobBoard;
