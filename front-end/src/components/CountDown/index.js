/**
 *
 * CountDown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

/* eslint-disable react/prefer-stateless-function */
class CountDownSeconds extends React.PureComponent {
  renderer = time => {
    return time.total / 1000;
  };
  render() {
    return (
      <Countdown
        controlled={false}
        date={Date.now() + this.props.seconds * 1000 || 0}
        renderer={this.renderer}
        onComplete={this.props.onComplete}
        onTick={this.props.onTick}
      />
    );
  }
}

CountDownSeconds.propTypes = {
  seconds: PropTypes.number.isRequired,
  onComplete: PropTypes.func,
};

export default CountDownSeconds;
