import React, { PropTypes, Component } from 'react';

class ManualCountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: 0,
      countDownSec: this.props.seconds,
      continue: true,
    };
  }

  componentDidMount() {
    // update every second
    if (this.props.stop) {
      this.stop();
      this.props.handleStop();
    } else {
      this.interval = setInterval(() => {
        if (this.state.countDownSec > 0) {
          this.setState({ countDownSec: this.state.countDownSec - 1 }, () => {
            this.handlePerSecondsCallBack();
          });
        } else if (this.state.countDownSec === 0) {
          this.stop();
          if (!this.props.stop) {
            this.props.handleCompelete();
          }
        }
      }, 1000);
    }
  }

  handlePerSecondsCallBack = () => {
    this.props.perSeconds(this.state.countDownSec);
  };

  // // Cần một cái cờ để set lại
  // componentWillReceiveProps() {
  //   if (this.state.countDownSec === 0) {
  //     this.stop();
  //   }
  //   if (
  //     this.state.countDownSec !== this.props.seconds &&
  //     this.props.seconds !== 0 &&
  //     !this.interval
  //   ) {
  //     this.setState({ countDownSec: this.props.seconds });
  //   }
  // }

  componentWillUnmount() {
    debugger;
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2 && value !== '0') {
      value = '0' + value;
    }
    return value;
  }

  reload = () => {
    console.log(this.props.reload, this.props.stop);
    if (this.props.reload && this.props.stop) {
      debugger;
      this.setState({ countDownSec: this.props.seconds });
    }
  };

  render() {
    // this.reload();
    return <span>{this.addLeadingZeros(this.state.countDownSec)}</span>;
  }
}

ManualCountDown.propTypes = {};

ManualCountDown.defaultProps = {
  seconds: 0,
  perSeconds: () => {},
};

export default ManualCountDown;
