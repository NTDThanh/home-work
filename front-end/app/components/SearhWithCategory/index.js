/**
 *
 * SearhWithCategory
 *
 */

import React from 'react';
import { Input, Select } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class SearhWithCategory extends React.PureComponent {
  render() {
    return (
      <Input.Group
        className="header-search-controls"
        style={{ height: 40 }}
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
        <Input.Search
          placeholder="What you want to test ?"
          className="header-controls-input"
          onSearch={value => console.log(value)}
          enterButton="Search"
          size="large"
        />
      </Input.Group>
    );
  }
}

SearhWithCategory.propTypes = {};

export default SearhWithCategory;
