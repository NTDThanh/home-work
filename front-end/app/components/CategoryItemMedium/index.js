/**
 *
 * CategoryItemMedium
 *
 */

import React from 'react';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import IconCricle from '../Icon/Circle';

function CategoryItemMedium(props) {
  const categoryName = (
    <p className="category-item-medium-name">
      {props.categoryName || 'Category name'}
    </p>
  );

  return (
    <Card
      className="category-item-medium"
      bodyStyle={{ padding: 0 }}
      style={{ borderRadius: 4 }}
    >
      <Row gutter={4} className="category-item-medium-row">
        <Col span={5}>
          <IconCricle {...props} />
        </Col>
        {props.number ? (
          <React.Fragment>
            <Col span={16} style={{ overflow: 'hidden' }}>
              {categoryName}
            </Col>
            <Col span={3}>
              <p
                className="category-item-medium-number"
                style={{ color: `${props.grandients.colorStop2}` }}
              >
                {props.number || 0}
              </p>
            </Col>
          </React.Fragment>
        ) : (
          <Col span={20}>{categoryName}</Col>
        )}
      </Row>
    </Card>
  );
}

CategoryItemMedium.propTypes = {
  iconName: PropTypes.string,
  categoryName: PropTypes.string,
  number: PropTypes.number,
  grandients: PropTypes.object,
};

export default CategoryItemMedium;
