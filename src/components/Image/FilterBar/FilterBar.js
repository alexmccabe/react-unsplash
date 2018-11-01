import React, { Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './filter-bar.module.scss';
// import PropTypes from 'prop-types';

class FilterBar extends Component {
  filters = [
    {
      label: 'Latest',
      url: '/',
      exact: true
    },
    {
      label: 'Popular',
      url: '/popular',
      exact: false
    },
    {
      label: 'Oldest',
      url: '/oldest',
      exact: false
    }
  ];

  ref = createRef();

  getHeight = () => {
    return this.ref.current.clientHeight;
  };

  render() {
    return (
      <div className={styles.container} ref={this.ref}>
        <ul className={styles.list}>
          {this.filters.map((item, index) => {
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
  }
}

export default FilterBar;
