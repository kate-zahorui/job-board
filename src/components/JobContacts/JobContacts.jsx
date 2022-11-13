import { Title } from '../';

import s from './JobContacts.module.css';

const JobContacts = () => {
  return (
    <section>
      <div className={s.mobile}>
        <Title>Contacts</Title>
      </div>
      <div className={s.contacts}>
        <div className={s.contacts__bg}>
          <div className={s.contacts__text}>
            <h3 className={s.contacts__name}>
              Department name. University Hospital Giessen.
            </h3>
            <address className={s.contacts__address}>
              AKH Wien, 1090 Wien, Währinger Gürtel 18-20
            </address>
            <address>
              <a href="tel:+43014040012090" className={s.contacts__link}>
                +43 (01) 40400-12090
              </a>
              <a
                href="mailto:post_akh_diz@akhwien.at"
                className={s.contacts__link}
              >
                post_akh_diz@akhwien.at
              </a>
            </address>
          </div>

          <div className={s.map}>Map</div>
        </div>
      </div>
    </section>
  );
};

export default JobContacts;
