import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem';
import styles from './navigation.module.scss';

const Navigation = forwardRef(({ navItems }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <ul className={styles.list}>
        {navItems.map((item, index) => {
          return (
            <NavigationItem key={index} url={item.url} label={item.label} />
          );
        })}
      </ul>
    </div>
  );
});

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Navigation;
