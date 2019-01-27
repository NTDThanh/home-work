/**
 *
 * SearhWithCategory
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Input, Select, Button } from 'antd';

/* eslint-disable react/prefer-stateless-function */
class SearhWithCategory extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Input.Group
          className="header-search-controls"
          style={{ height: 55 }}
          size="large"
          compact
        >
          <Select
            defaultValue="Zhejiang"
            dropdownClassName="header-controls-dropdown"
            className="header-controls-select"
          >
            <Select.Option value="Zhejiang">Zhejiang</Select.Option>
            <Select.Option value="Jiangsu">Jiangsu</Select.Option>
          </Select>
          <Input
            placeholder="What you want to test ?"
            className="header-controls-input"
            onSearch={value => console.log(value)}
          />
          <Button className="header-controls-button">Search</Button>
        </Input.Group>
        <br />
      </React.Fragment>
    );
  }
}

SearhWithCategory.propTypes = {};

export default SearhWithCategory;
