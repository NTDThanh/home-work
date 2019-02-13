/**
 *
 * GridCourse
 *
 */

import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.less'; // eslint-disable-line
const { Meta } = Card;

/* eslint-disable react/prefer-stateless-function */
class GridExerciseItem extends React.PureComponent {
  authorLink = author => (
    <Link to={`/author/${author.id}`} title={author.fullName} />
  );

  render() {
    const { exercise } = this.props;
    return (
      <Card
        className="grid-course-item"
        hoverable
        cover={
          <img
            alt={exercise.name}
            src={
              exercise.image ||
              'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            }
          />
        }
        actions={[exercise.level.name, exercise.answerTime, exercise.createAt]}
      >
        <Meta
          title={exercise.name}
          description="ThanhTD" // {this.authorLink(exercise.author)}
        />
      </Card>
    );
  }
}

GridExerciseItem.propTypes = {
  exercise: PropTypes.object,
};

export default GridExerciseItem;
