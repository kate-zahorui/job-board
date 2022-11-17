import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setJob } from '../../redux/jobs/jobsSlice';
import {
  ActionsButton,
  Button,
  Container,
  JobAdditional,
  JobContacts,
  JobDescription,
  JobImages,
  JobIntro,
  ReturnButton,
} from '../../components';

import s from './DetailedJob.module.css';

const DetailedJob = () => {
  const { currentJob, isLoading, error } = useSelector(state => state.jobs);
  const dispatch = useDispatch();
  const { jobId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!jobId) return;
    dispatch(setJob(jobId));
  }, [dispatch, jobId]);

  const showJob = currentJob && !error && !isLoading;

  return (
    <main className={s.background}>
      <Container>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error. {error.message}</p>}

        {showJob && (
          <>
            <div className={s.container}>
              <div className={s.main}>
                <div className={s.header}>
                  <h1 className={s.header__title}>Job Details</h1>
                  <div className={s.header__actions}>
                    <ActionsButton action="save" />
                    <ActionsButton action="share" />
                  </div>
                </div>
                <div className={s.desktop}>
                  <Button />
                </div>
                <section className={s.job}>
                  <JobIntro />
                  <JobDescription />
                </section>
                <div className={s.buttonbox}>
                  <Button />
                </div>

                <JobImages />
                <JobAdditional />
              </div>

              <JobContacts />
            </div>
            <div className={s.desktop}>
              <ReturnButton />
            </div>
          </>
        )}
      </Container>
    </main>
  );
};

export default DetailedJob;
