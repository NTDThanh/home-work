import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import * as styleUtil from '../../../utils/styleUtil';

function IconCricle(props) {
  const { grandients } = props;
  const shadowColor =
    styleUtil.hexToRGBOrRGBA(grandients.shadowColor, 0.18) || '#CCCCCC';
  return (
    <React.Fragment>
      <Icon
        type={props.iconName || 'question-circle'}
        className="category-item-medium-icon"
        style={{
          backgroundImage: `linear-gradient(${grandients.linear ||
            'to bottom right'},${grandients.colorStop1 ||
            '#FF418C'} , ${grandients.colorStop2 || '#F1892C'})`,
          boxShadow: `0px 10px 24px ${shadowColor}`,
        }}
      />
    </React.Fragment>
  );
}

IconCricle.propTypes = {
  iconName: PropTypes.string,
  grandients: PropTypes.object,
};

export default IconCricle;
