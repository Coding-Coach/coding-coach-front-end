import React from 'react';
import classNames from 'classnames/bind';
import { object, bool } from 'prop-types';
import styles from './assets/panelfooter.scss';

const cx = classNames.bind(styles);

const Footer = ({ children, classes }) => {
  const footerClasses = cx({
    footer: true,
    [classes.footer]: classes.footer,
  });

  return <footer className={footerClasses}>{children}</footer>;
};

Footer.propTypes = {
  classes: object,
  pullRight: bool,
};

Footer.defaultProps = {
  classes: {},
};

export default Footer;