import React from 'react';

const NavBar = () => {
  const navItems = [
    {
      icon: '',
      label: 'Photos',
      url: '/',
      exact: true
    },

    {
      icon: '',
      label: 'Collections',
      url: '/collections',
      exact: false
    }
  ];

  return (
    <nav className="navBarContainer">
      <ul className="navBarList">
        <li className="navBarListItem" />
      </ul>
    </nav>
  );
};

export default NavBar;
