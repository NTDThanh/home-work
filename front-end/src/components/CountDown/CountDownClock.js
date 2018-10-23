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
      complete: 90,
    };
  }
  handleOnTick = () => {};
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
            seconds={120}
            onComplete={this.props.handleTimeUp}
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
