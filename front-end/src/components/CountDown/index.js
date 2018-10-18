/**
 *
 * CountDown
 *
 */

import React from "react";
import PropTypes from "prop-types";
import Countdown from "react-countdown-now";

/* eslint-disable react/prefer-stateless-function */
class CountDownClock extends React.PureComponent {
  renderer = time => <span>{time.seconds}</span>;
  render() {
    return (
      <Countdown
        date={Date.now() + this.props.seconds * 1000 || 0}
        renderer={this.renderer}
        onComplete={this.props.onComplete}
      />
    );
  }
}

CountDownClock.propTypes = {
  seconds: PropTypes.number.isRequired,
  onComplete: PropTypes.func
};

export default CountDownClock;
