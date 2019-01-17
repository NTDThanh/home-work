/**
 *
 * ShowServerState
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Form, Row, Col, Input } from 'antd';
import messages from './messages';

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 20 },
  },
};

const FormItem = Form.Item;

/* eslint-disable react/prefer-stateless-function */
class ShowServerState extends React.PureComponent {
  render() {
    return (
      <Form className="ant-advanced-search-form">
        <Row>
          <Col span={10}>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage {...messages.serverLabelState} />}
            >
              <Input value={this.props.serverState} readOnly />
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

ShowServerState.propTypes = {
  serverState: PropTypes.string,
};

export default ShowServerState;
