import React from 'react';
import PropTypes from 'prop-types';
import s from './Publication.module.css';

const Publication = ({ title, text, numberPage }) => (
  <article className={s.publication}>
    <h2>
      {numberPage}.{title}
    </h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  numberPage: PropTypes.number.isRequired,
};

export default Publication;
