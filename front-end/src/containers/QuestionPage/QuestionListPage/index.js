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

import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import TableWithAction from 'components/Table/TableAction.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import AddIcon from '@material-ui/icons/Add';
import CloudUpload from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import pageBaseStyle from 'assets/jss/material-dashboard-react/components/pageBaseStyle.jsx';
import AutoCompelete from '../../../components/AutoCompelete';
import csv from 'csv-parser';
import { encryptionToString } from '../../../utils/security';

/* eslint-disable react/prefer-stateless-function */
export class QuestionListPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEdit = question => {};

  handleDelete = question => {};

  handleUpLoadFile = event => {
    const csvFile = event.target.files[0];
    const csvFileItem = event.target.files.item(0);
    const fr = new FileReader();
    const stream = csv();
    let count = 0;
    let datablank = false;
    let csvFileName = '';
    let csvText = '';
    let numOfRow = '';
    let listRecord = [];
    const isCsv = /\.(csv|CSV)$/i;
    csvFileName = csvFile.name;

    fr.readAsText(csvFile);
    fr.onload = e => {
      csvText = e.target.result;
      // Check File Csv:is null
      if (csvText === '') {
        return;
      }
      // Check File Csv:is only header
      if (numOfRow === -1) {
        return;
      }
      stream.write(csvText);
    };
    stream.on('data', parseData => {
      if (parseData.questionCode !== '') {
        listRecord.push(parseData);
      }
      stream.end(() => {
        console.timeStamp('start');
        const listQuestion = this.convertCsvToOject(listRecord);
        console.timeStamp('end');
        console.log('listQuestion', listQuestion);
      });
    });
  };

  convertCsvToOject = importedQuestions => {
    let listQuestion = [];
    importedQuestions.forEach(importedQuestion => {
      const question = {
        detail: importedQuestion.questionDetail,
        questionCode: importedQuestion.questionCode,
        description: importedQuestion.questionDescription,
        countDown: importedQuestion.countDown,
        answers: this.getAnswer(
          importedQuestion.answer1Code,
          importedQuestion.answer2Code,
          importedQuestion.answer3Code,
          importedQuestion.answer4Code,
          importedQuestion.answer1Detail,
          importedQuestion.answer2Detail,
          importedQuestion.answer3Detail,
          importedQuestion.answer4Detail,
        ),
        correctAnswerCode: encryptionToString(
          importedQuestion.correctAnswerCode,
          importedQuestion.questionCode, // Secrect key
        ),
      };
      listQuestion.push(question);
    });
    return listQuestion;
  };

  getAnswer = (
    answer1Code,
    answer2Code,
    answer3Code,
    answer4Code,
    answer1Detail,
    answer2Detail,
    answer3Detail,
    answer4Detail,
  ) => {
    const listAnswer = [];
    if (answer1Code !== '' && answer1Detail !== '') {
      listAnswer.push({ answerCode: answer1Code, detail: answer1Detail });
    }
    if (answer2Code !== '' && answer2Detail !== '') {
      listAnswer.push({ answerCode: answer2Code, detail: answer2Detail });
    }
    if (answer3Code !== '' && answer3Detail !== '') {
      listAnswer.push({ answerCode: answer3Code, detail: answer3Detail });
    }
    if (answer4Code !== '' && answer4Detail !== '') {
      listAnswer.push({ answerCode: answer4Code, detail: answer4Detail });
    }
    return listAnswer;
  };
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
                  <div className={classes.searchBoxContent}>
                    <AutoCompelete />
                  </div>
                  <IconButton color="inherit" onClick={this.openCreate}>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    className={classes.buttonUploadContent}
                    onClick={this.openCreate}
                  >
                    <CloudUpload />
                    <input
                      type="file"
                      name="uploadfile"
                      className={classes.btnUploadFile}
                      onChange={this.handleUpLoadFile}
                      multiple={false}
                      accept=".csv, .CSV"
                    />
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
