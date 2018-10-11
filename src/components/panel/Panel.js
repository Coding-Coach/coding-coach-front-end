import React, { cloneElement } from 'react';
import { node, func, bool, object } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/panel.scss';
import Header from './PanelHeader';
import Content from './PanelContent';
import Footer from './PanelFooter';
import { noop } from 'utils/noop';

const cx = classNames.bind(styles);

/**
 * Usage:
 *
 * const classes = {
 *    root: styles.classNameForRootElement,
 *    body: styles.classForTheBodyContainer,
 * };
 * const headerClasses = {
 *    title: styles.classForTheTitle
 * };
 *
 * const footerClasses = {
 *    footer: 'custom-class-for-the-footer-container'
 * };
 *
 *   <Panel trigger={<Button>Open Me</Button>} closable={false} onClose={onClose} classes={classes}>
 *     <Panel.Header classes={headerClasses}>Some title here</Panel.Header>
 *     <Panel.Content>
 *       <img src="something.png" />
 *       <div>
 *         <p>We should be able to add anything as the content<.p>
 *       </div>
 *     </Panel.Content>
 *     <Panel.Footer classes={footerClasses}>
 *       <CustomFooterComponent />
 *     </Panel.Footer>
 *   </Panel>
 */

export default class Panel extends React.Component {
  static propTypes = {
    trigger: node,
    onClose: func,
    closable: bool,
    open: bool,
    modal: bool,
    classes: object,
  };

  static defaultProps = {
    closable: false,
    modal: false,
    onClose: noop,
    classes: {},
    open: false,
  };

  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  constructor(props) {
    super(props);
    // this.state = { open: this.props.open !== undefined ? this.props.open : Panel.defaultProps.open };
    this.state = { ...Panel.defaultProps };

    // event handlers hard bound to this
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleCloseIconClick = this.handleCloseIconClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentWillReceiveProps({ open }) {
    this.setState({ open });
  }

  componentDidMount() {
    // attach keydown event listener on document when the component is mounted
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    // remove the attached keydown event listener when the component is unmounted
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleTriggerClick() {
    this.setState({ open: true });
  }

  handleEscape(e) {
    const ESCAPE_KEY = 27;
    if (e.keyCode === ESCAPE_KEY) {
      this.close(e);
    }
  }

  handleCloseIconClick(e) {
    this.close(e);
  }

  close(event) {
    const { onClose } = this.props;
    onClose(event);

    this.setState({ open: false });
  }

  renderCloseIcon() {
    const { closable } = this.props;
    return closable ? <i className={styles.closeIcon} onClick={this.handleCloseIconClick} /> : null;
  }

  render() {
    const { trigger, children, closable, modal, classes } = this.props;
    const { open } = this.state;
    const rootClasses = cx({
      modal: modal,
      popup: !modal,
      [classes.root]: classes.root,
    });

    const mainSectionClasses = cx({
      modalMain: modal,
      PanelMain: !modal,
      [classes.body]: classes.body,
    });

    return [
      trigger ? cloneElement(trigger, { onClick: this.handleTriggerClick, key: 'trigger' }) : null,
      open ? (
        <div className={rootClasses} key="root">
          <section className={mainSectionClasses}>
            {this.renderCloseIcon()}
            {children}
          </section>
        </div>
      ) : null,
    ];
  }
}
