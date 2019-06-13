import React from 'react';
import PropTypes from 'prop-types';
import style from './profile.css';

const FaceImg = ({ alt }) => (
  <div>
    <img
      className={style.face}
      src="https://avatars3.githubusercontent.com/u/16547926?s=460&v=4"
      alt={alt}
    />
  </div>
);

FaceImg.propTypes = {
  alt: PropTypes.string,
};

export default FaceImg;
