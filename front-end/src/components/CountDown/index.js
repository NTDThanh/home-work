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
    console.log(
      'CountDownSeconds',
      Date.now() + this.props.seconds * 1000,
      this.props.controlled,
    );
    return (
      <Countdown
        // controlled={this.props.controlled}
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
  controlled: PropTypes.bool,
};

export default CountDownSeconds;
