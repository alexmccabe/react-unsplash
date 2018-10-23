import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

const FilterBar = () => {
  const filters = [
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

  return (
    <div className="filterBarContainer">
      <ul className="filterList">
        {filters.map((item, index) => {
          return (
            <li className="filterListItem" key={index}>
              <NavLink
                to={item.url}
                exact={item.exact}
                activeClassName="filterListLinkActive"
                className="filterListLink"
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBar;
