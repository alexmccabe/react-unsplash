import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

const NavigationItem = ({
  url,
  exact,
  label,
  children,
  activeClassName,
  className
}) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={url}
        exact={exact}
        activeClassName={classNames(activeClassName, styles.linkActive)}
        className={classNames(className, styles.link)}
      >
        {children ? children : label}
      </NavLink>
    </li>
  );
};

NavigationItem.defaultProps = {
  exact: false
};

NavigationItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  url: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  exact: PropTypes.bool,
  label(props, propName, componentName) {
    if (
      !props['children'] &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error(
        'The prop `label` is required if no `child` prop ' +
          'is provided, but its value is `undefined` in `' +
          componentName +
          '`'
      );
    }
  }
};

export default NavigationItem;
