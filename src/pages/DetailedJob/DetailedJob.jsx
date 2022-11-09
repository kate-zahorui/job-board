import {
  Button,
  JobAdditional,
  JobContacts,
  JobDescription,
  JobImages,
  ReturnButton,
} from '../../components';

const DetailedJob = () => {
  return (
    <article>
      <div>
        <h1>Job Details</h1>
        <div>
          <button>Save to my list</button>
          <button>Share</button>
        </div>
      </div>
      <Button />
      <section>
        <h2>
          Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
          Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
          Fachärztin für Arbeitsmedizin (m/w/d)
        </h2>
        <p>Posted 2 days ago</p>
        <div>
          <p>Brutto, per year</p>
          <p>€ 54 000—60 000</p>
        </div>
        <JobDescription />
      </section>
      <Button />
      <JobImages />
      <JobAdditional />

      <ReturnButton />
      <JobContacts />
    </article>
  );
};

export default DetailedJob;
