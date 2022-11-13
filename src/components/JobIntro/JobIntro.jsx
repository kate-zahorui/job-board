import s from './JobIntro.module.css';

const JobIntro = () => {
  return (
    <div className={s.job}>
      <h2 className={s.job__title}>
        Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
        Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
        Fachärztin für Arbeitsmedizin (m/w/d)
      </h2>
      <p className={s.job__date}>Posted 2 days ago</p>
      <div className={s.salary}>
        <p className={s.salary__text}>Brutto, per year</p>
        <p className={s.salary__number}>€ 54 000—60 000</p>
      </div>
    </div>
  );
};

export default JobIntro;
