import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './filter-menu.module.scss';
// import PropTypes from 'prop-types';

const FilterMenu = forwardRef(({ filters }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <ul className={styles.list}>
        {filters &&
          filters.map((item, index) => {
            return (
              <li className={styles.item} key={index}>
                <NavLink
                  to={item.url}
                  exact={item.exact}
                  activeClassName={styles.linkActive}
                  className={styles.link}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
});

FilterMenu.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default FilterMenu;
