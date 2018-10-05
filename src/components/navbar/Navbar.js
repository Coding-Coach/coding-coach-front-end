import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './navbar.scss';

const Navbar = ({ t }) => {
  const renderDesktop = (
    <nav className={styles.navigationBar}>
      <div className={styles.inner}>
        <a href="#about" className={styles.navLinks}>
          {t('About')}
        </a>
        <a href="#mission" className={styles.navLinks}>
          {t('Mission')}
        </a>
        <a href="#contact" className={styles.navLinks}>
          {t('Contact')}
        </a>
      </div>
    </nav>
  );
  const renderMobile = <div>This is for mobile.</div>;
  const renderComponent = window.innerWidth > 600 ? renderDesktop : renderMobile;

  return <div>{renderComponent}</div>;
};

export default translate('translations')(Navbar);
