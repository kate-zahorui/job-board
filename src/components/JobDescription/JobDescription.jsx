import s from './JobDescription.module.css';

const JobDescription = () => {
  return (
    <div className={s.description}>
      <p className={s.description__text}>
        At WellStar, we all share common goals. That’s what makes us so
        successful – and such an integral part of our communities. We want the
        same things, for our organization, for our patients, and for our
        colleagues. As the most integrated healthcare provider in Georgia, this
        means we pride ourselves on investing in the communities that we serve.
        We continue to provide innovative care models, focused on improving
        quality and access to healthcare.
      </p>
      <h3 className={s.description__title}>Responsopilities</h3>
      <p className={s.description__text}>
        Wellstar Medical Group, a physician-led multi-specialty group in
        Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
        surgeon to join their existing cardiovascular program. This is an
        opportunity to play a key role on a multidisciplinary team of
        cardiologists and surgeons. The ideal candidate will have five or more
        years of experience in cardiac surgery. This candidate should be facile
        with off-pump revascularization, complex aortic surgery, minimally
        invasive valve and valve repair, transcatheter valve replacement,
        surgical atrial fibrillation ablation, ventricular assist device
        placement, and extra corporeal membrane oxygenation. Wellstar is one of
        the largest integrated healthcare systems in the Southeast with 11
        hospitals in Atlanta metro region. With two open heart programs at
        Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar
        cardiac surgeons perform over 1200 cardiac procedures per year. The
        cardiac service line is the only center in Georgia with the Joint
        Commission’s Comprehensive Cardiac Center certification.
      </p>
      <h3 className={s.description__title}>Compensation & Benefits:</h3>
      <p className={s.description__text}>
        Our physicians enjoy a wide range of benefits, including:
      </p>
      <ul className={s.description__list}>
        <li className={s.description__item}>
          Very competitive compensation package with bonuses
        </li>
        <li className={s.description__item}>
          Medical, Dental, and Vision Insurance
        </li>
        <li className={s.description__item}>
          Occurrence-based Malpractice Coverage
        </li>
        <li className={s.description__item}>
          Short-term and Long-term Disability Insurance and life insurance
        </li>
      </ul>
    </div>
  );
};

export default JobDescription;
