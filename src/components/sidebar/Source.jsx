// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';

type Props = {
  link?: string
};

const Source = ({ link } : Props) => (
  <div className="source-container container-block">
    <h5 className="container-block-title-bottom" key="lang_header">
      <Link href="https://github.com/crisboarna/react-cv">{link}</Link>
    </h5>
  </div>
);

export default Source;

Source.propTypes = {
  link: PropTypes.shape.isRequired,
};
