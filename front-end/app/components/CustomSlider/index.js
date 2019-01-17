/**
 *
 * CustomSlider
 *
 */

import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class CustomSlider extends React.Component {
  state = {
    inputValue: this.props.min,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            {...this.props}
            // min={this.props.min}
            // max={this.props.max}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

CustomSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  id: PropTypes.string,
};

export default CustomSlider;
