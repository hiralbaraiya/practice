import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const DateFormat = ({ date }) => {
  return (
    <div>
      {moment(date).format('L')}
    </div>
  );
};

DateFormat.defaultProps = {
  date: new Date(''),
};

DateFormat.propTypes = {
  date: PropTypes.object,
};

export default DateFormat;