import React from 'react';
import PropTypes from 'prop-types';
import './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;