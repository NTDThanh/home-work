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
    const level = exercise.level || {};
    return (
      <Card
        className="grid-excercises-item"
        hoverable
        cover={
          <img
            alt={exercise.name}
            className="grid-excercises-cover-image"
            src={
              exercise.image ||
              'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            }
          />
        }
        actions={[
          level.name || 'Beginer',
          exercise.answerTime || '6m30s',
          exercise.createAt || '2019-01-25',
        ]}
      >
        <Meta
          title={exercise.name}
          className="grid-excercises-title"
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
