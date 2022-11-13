import { Container, JobList } from '../../components';
import s from './JobBoard.module.css';

const JobBoard = () => {
  return (
    <main className={s.background}>
      <Container>
        <JobList />
      </Container>
    </main>
  );
};

export default JobBoard;
