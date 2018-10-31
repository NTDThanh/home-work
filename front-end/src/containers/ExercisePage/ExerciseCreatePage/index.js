/**
 *
 * ExerciseCreatePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectExerciseCreatePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import TextField from '@material-ui/core/TextField';
import CardBody from 'components/Card/CardBody.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import GridList from '@material-ui/core/GridList';

import CardFooter from 'components/Card/CardFooter.jsx';
import SendIcon from '@material-ui/icons/Send';
import classNames from 'classnames';
const styles = theme => ({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  buttonGroup: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 10,
    right: 10,
  },
  button: {
    marginRight: 10,
    maxHeight: 40,
  },
  marginSpan: {
    textAlign: 'center',
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const levelList = [
  {
    value: '1',
    label: 'Level1',
  },
  {
    value: '2',
    label: 'Level2',
  },
  {
    value: '4',
    label: 'Level4',
  },
  {
    value: '5',
    label: 'Level5',
  },
];
/* eslint-disable react/prefer-stateless-function */
export class ExerciseCreatePage extends React.PureComponent {
  handleBack = () => {
    this.props.history.push('/excercise/list');
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Exercise</h4>
                <p className={classes.cardCategoryWhite}>Create</p>
                <div className={classes.buttonGroup}>
                  <Button
                    color="teal"
                    className={classes.button}
                    onClick={this.handleBack}
                  >
                    <i class="material-icons ">backspace</i>
                    <span className={classes.marginSpan}>Cancel</span>
                  </Button>
                  <Button color="teal" className={classes.button}>
                    <i class="material-icons ">send</i>
                    <span className={classes.marginSpan}>Create</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <TextField
                      label="Name"
                      id="name"
                      className={classNames(classes.textField, classes.dense)}
                      margin="normal"
                      fullWidth
                      style={{ margin: 8 }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <TextField
                      id="image"
                      label="Image"
                      className={classNames(classes.textField, classes.dense)}
                      margin="normal"
                      fullWidth
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <TextField
                      id="questions"
                      label="Questions"
                      className={classNames(classes.textField, classes.dense)}
                      margin="normal"
                      fullWidth
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <TextField
                      id="skills"
                      label="Skills"
                      className={classNames(classes.textField, classes.dense)}
                      margin="normal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <TextField
                      id="level"
                      label="Level"
                      select
                      className={classes.textField}
                      margin="normal"
                      fullWidth
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                    >
                      {levelList.map(option => (
                        <option key={option.z} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">
                  <SendIcon />
                  Create
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="primary">Questions</CardHeader>
                <CardBody>Noi dung</CardBody>
                <CardFooter>Action</CardFooter>
              </Card>
              <Card>
                <CardHeader color="primary">Skills</CardHeader>
                <CardBody>Noi dung</CardBody>
                <CardFooter>Action</CardFooter>
              </Card>
              <Card>
                <CardHeader color="primary">Level</CardHeader>
                <CardBody>Noi dung</CardBody>
                <CardFooter>Action</CardFooter>
              </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ExerciseCreatePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  exercisecreatepage: makeSelectExerciseCreatePage(),
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

const withStyle = withStyles(styles);
const withReducer = injectReducer({ key: 'exerciseCreatePage', reducer });
const withSaga = injectSaga({ key: 'exerciseCreatePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle,
)(ExerciseCreatePage);
