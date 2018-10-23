/**
 *
 * CountDownClock
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CountDownSeconds from './index';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  clockWrapper: {
    height: '155px',
    width: '155px',
    padding: '20px',
    top: '100px',
    right: '-155px',
    position: 'absolute',
    'background-color': 'black',
    'box-sizing': 'border-box',
  },
  countDownRing: {
    position: 'fixed',
    boxSizing: 'border-box',
  },
  secondsCountDown: {
    color: 'white',
    fontSize: '48px',
    fontWeight: 200,
    lineHeight: '115px',
    padding: 0,
    margin: 0,
    width: '100%',
    textAlign: 'center',
  },
  colorSecondary: {
    color: 'red',
  },
};
class CountDownClock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      complete: 100,
      seconds: this.props.seconds || 0,
    };
  }

  handleOnTick = time => {
    if (this.state.seconds !== 0) {
      const timeSpan = 100 - (time.total / 1000 / this.state.seconds) * 100;
      this.setState({ complete: 100 - timeSpan });
    }
  };

  handleTimeUp = () => {
    this.setState({ complete: 0 });
    this.props.onComplete;
  };

  componentDidUpdate(preProps) {
    if (preProps.seconds !== this.props.seconds) {
      this.updateSeconds(this.props.seconds);
    }
  }

  updateSeconds = seconds => {
    this.setState({ seconds });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.clockWrapper}>
        <div className={classes.countDownRing}>
          <CircularProgress
            variant="static"
            value={this.state.complete}
            thickness={1.5}
            size={115}
            color="secondary"
            className={{ colorSecondary: classes.colorSecondary }}
          />
        </div>
        <p className={classes.secondsCountDown}>
          <CountDownSeconds
            seconds={this.props.seconds}
            onComplete={this.handleTimeUp}
            onTick={this.handleOnTick}
          />
        </p>
      </div>
    );
  }
}

CountDownClock.propTypes = {
  seconds: PropTypes.number.isRequired,
  onComplete: PropTypes.func,
};

export default withStyles(styles)(CountDownClock);