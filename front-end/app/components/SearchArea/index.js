/**
 *
 * SearchArea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
import { Form, Row, Col, Input } from 'antd';
// import messages from './messages';
import Search from 'antd/lib/input/Search';
import styles from './styles.less'; // eslint-disable-line

const FormItem = Form.Item;
/* eslint-disable react/prefer-stateless-function */
class SearchArea extends React.PureComponent {
  state = {
    expand: false,
  };

  handleSearch = value => {
    this.props.getValueSearch(value); // eslint-disable-line
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 4 : 2;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 5; i += 1) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>,
      );
    }
    return children;
  }

  render() {
    return (
      <Form className="ant-advanced-search-form">
        <Row gutter={24}>
          <Col sm={10}>
            <FormItem>
              {this.props.form.getFieldDecorator(`keyword`, {})(
                <Search
                  placeholder="タスクIDで検索"
                  enterButton="Search"
                  size="large"
                  onSearch={this.handleSearch} // eslint-disable-line
                  autoFocus
                />,
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

SearchArea.propTypes = {
  getFieldDecorator: PropTypes.func,
  form: PropTypes.object,
  resetFields: PropTypes.func,
};

export default Form.create()(SearchArea);
