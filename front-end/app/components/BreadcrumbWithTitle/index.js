/**
 *
 * BreadcrumbWithTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import styles from './styles.less';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class BreadcrumbWithTitle extends React.PureComponent {
  render() {
    const { listUrl = [] } = this.props;
    const breadcrumbSeparator = (
      <Icon className="custom-separator" type="global" />
    );
    return (
      <>
        {this.props.header && (
          <h4 className="header-with-breadcrumb">{this.props.header}</h4>
        )}
        <Breadcrumb separator={breadcrumbSeparator}>
          {listUrl.map((item, index) => {
            // Last link is current link
            if (index === listUrl.length - 1) {
              return (
                <Breadcrumb.Item>{item.urlName || 'Link'}</Breadcrumb.Item>
              );
            }

            return (
              <Breadcrumb.Item>
                <Link className="breadcrumb-link" to={`/${item.url}`}>
                  {item.urlName || 'Link'}
                </Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </>
    );
  }
}

BreadcrumbWithTitle.propTypes = {
  header: PropTypes.element,
  listUrl: PropTypes.array,
};

export default BreadcrumbWithTitle;
