import React from 'react';
import PropTypes from 'prop-types';
import { logo } from '../../../../build/images/githubFace.svg';
// import Face from './face';
import style from './profile.css';

const Profile = ({ linkedin, github }) => (
  <div className={style.profile}>
    <img src={logo} alt="github" />
    <a href={`https://linkedin.com/in/${linkedin}`}>{linkedin}</a>
    <a href={`https://github.com/${github}`}>{github}</a>
  </div>
);

Profile.propTypes = {
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export default Profile;
