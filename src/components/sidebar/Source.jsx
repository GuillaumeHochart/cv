// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  link?: string
};

const Source = ({ link } : Props) => (
  <div className="source-container container-block">
    <h5 className="container-block-title-bottom" key="lang_header">
      {link}
    </h5>
  </div>
);

export default Source;

Source.propTypes = {
  link: PropTypes.shape.isRequired,
};
