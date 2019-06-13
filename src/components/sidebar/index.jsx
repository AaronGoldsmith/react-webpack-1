import React from 'react';
// import PropTypes from 'prop-types';
import Face from './profile/face';
import Profile from './profile';

import style from './sidebar.css';

const Sidebar = () => (
  <div className={style.sidebar}>
    <Face alt="Goldsmith self" />
    <Profile github="aarongoldsmith" linkedin="aarongoldsmith-1" />
  </div>
);

export default Sidebar;
