import React from 'react';
import PropTypes from 'prop-types';
import s from './Counter.module.css';

const Counter = ({ index }) => <p className={s.counter}>{index}/12</p>;

Counter.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Counter;
