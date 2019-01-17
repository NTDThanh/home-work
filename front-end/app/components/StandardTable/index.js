/**
 *
 * StandardTable
 *
 */

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Table, Alert } from 'antd';
import styles from './index.less';
import messages from './messages';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}
/* eslint-disable react/prefer-stateless-function */
class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
      /* eslint-disable-next-line */
      current: props.data.pagination.current,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      return {
        selectedRowKeys: [],
        needTotalList,
      };
    }
    return null;
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    needTotalList = needTotalList.map(item => ({
      ...item,
      total: selectedRows.reduce(
        (sum, val) => sum + parseFloat(val[item.dataIndex], 10),
        0,
      ),
    }));
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  onChangePagination = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const {
      data: { list, pagination },
      rowKey,
      ...rest
    } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      onChange: page => this.onChangePagination(page),
      ...pagination,
      current: this.state.current,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <Fragment>
                <FormattedMessage {...messages.selected} />
                {/* eslint-disable-next-line */}
                <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a>{' '}
                アイテム&nbsp;&nbsp;
                {needTotalList.map(item => (
                  <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                    {item.title}
                    トータル&nbsp;
                    <span style={{ fontWeight: 600 }}>
                      {item.render ? item.render(item.total) : item.total}
                    </span>
                  </span>
                ))}
                {/* eslint-disable-next-line */}
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  空の
                </a>
              </Fragment>
            }
            type="info"
            showIcon
          />
        </div>
        <Table
          rowKey={rowKey || 'key'}
          rowSelection={rowSelection}
          dataSource={list}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          {...rest}
        />
      </div>
    );
  }
}

StandardTable.propTypes = {
  selectedRows: PropTypes.array,
};

export default StandardTable;
