/**
 *
 * QuestionListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectQuestionListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import TableWithAction from 'components/Table/TableAction.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import pageBaseStyle from 'assets/jss/material-dashboard-react/components/tasksStyle.jsx';

/* eslint-disable react/prefer-stateless-function */
export class QuestionListPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleEdit = question => {};
  handleDelete = question => {};

  //#region  Control UI
  openCreate = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>QuestionListPage</title>
          <meta name="description" content="Description of QuestionListPage" />
        </Helmet>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Question list page</h4>
                <div className={classes.buttonAdd}>
                  <IconButton color="inherit" onClick={this.openCreate}>
                    <AddIcon />
                  </IconButton>
                </div>
              </CardHeader>
              <CardBody>
                <TableWithAction
                  tableHeaderColor="primary"
                  tableHead={['Question Detail', 'Time', 'Skill', 'Level']}
                  tableData={[
                    ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                    ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                    ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                    [
                      'Philip Chaney',
                      'Korea, South',
                      'Overland Park',
                      '$38,735',
                    ],
                    [
                      'Doris Greene',
                      'Malawi',
                      'Feldkirchen in Kärnten',
                      '$63,542',
                    ],
                    ['Mason Porter', 'Chile', 'Gloucester', '$78,615'],
                  ]}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

QuestionListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  questionlistpage: makeSelectQuestionListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withStyle = withStyles(pageBaseStyle);
const withReducer = injectReducer({ key: 'questionListPage', reducer });
const withSaga = injectSaga({ key: 'questionListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle,
)(QuestionListPage);
