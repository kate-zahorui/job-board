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
  return (
    <main className={s.background}>
      <Container>
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
      </Container>
    </main>
  );
};

export default DetailedJob;
