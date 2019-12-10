import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

Loader.defaultProps = {
  error: null,
};
Loader.propTypes = {
  error: PropTypes.string,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
};

export default Loader;
