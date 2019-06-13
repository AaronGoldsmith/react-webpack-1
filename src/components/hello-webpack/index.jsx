import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';

const HelloWebpack = ({ title }) => (
  <div className={style['hello-world']}>{title}</div>
);

HelloWebpack.propTypes = {
  title: PropTypes.string,
};

export default HelloWebpack;
