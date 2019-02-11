/**
 *
 * Baner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';
import messages from './messages';
// eslint-disable-next-line
import style from './style.less';

/* eslint-disable react/prefer-stateless-function */
class Baner extends React.PureComponent {
  render() {
    return (
      <div>
        <Row className="baner-blue" type="flex" justify="center">
          <Col sm={18}>
            <div className="baner-blue-text  baner-blue-text-color">
              <div className="text">
                {this.props.subtitle || 'Wellcome to test you skills'}
              </div>
              <div className="hdr">{this.props.title || 'Test you skills'}</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Baner.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default Baner;
