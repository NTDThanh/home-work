import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CountDownClock from '../CountDown/CountDownClock';
import { encryptionToString, decryption } from '../../utils/security';
import _ from 'lodash';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
  questionContains: {
    position: 'relative',
    paddingLeft: 0,
    paddingRight: 0,
    color: '#181818',
    'border-top-left-radius': 5,
    'border-top-right-radius': 5,
  },
  questionText: {
    float: 'left',
    fontSize: '24px',
    fontWeight: 300,
    margin: 0,
    color: '#181818',
    lineHeight: '32px',
    padding: '40px 40px 5px 40px',
    backgroundColor: 'white',
  },
  questionTitle: {
    float: 'left',
    width: '100%',
    backgroundColor: '#f2f2f2',
    color: '#aaaaaa',
    height: '50px',
    'border-top-left-radius': 5,
    'border-top-right-radius': 5,
  },
  questionTitleTextLeft: {
    float: 'left',
    fontSize: '12px',
    marginLeft: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '350px',
  },
  questionTitleTextRight: {
    float: 'right',
    fontSize: '12px',
    marginRight: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '350px',
    textAlign: 'right',
  },
  questionTitleProgressBar: {
    clear: 'both',
  },
  answerList: {
    float: 'left',
    padding: '30px 40px',
    width: '100%',
    boxSizing: 'border-box',
  },
  answerItem: {
    border: '2px solid #e3e3e2',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '5px',
    cursor: 'pointer',
    'min-height': '64px',
  },
  answerItemTrue: {
    // ...this.answerItem,
    border: '2px solid #86CE21',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '5px',
    cursor: 'pointer',
    '& svg': {
      color: '#86CE21',
    },
  },
  answerItemFail: {
    // ...this.answerItem,
    border: '2px solid #ea3939',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '5px',
    cursor: 'pointer',
    '& svg': {
      color: '#ea3939',
    },
  },
  answerItemText: {
    fontSize: '18px',
    fontWeight: 200,
    color: 'inherit',
    '& span': {
      color: 'inherit',
    },
  },
  questionFooter: {
    width: '100%',
    padding: ' 20px 40px 30px 40px',
    borderRadius: '0 0 5px 5px',
    boxSizing: 'border-box',
  },
  buttonNextQuestion: {
    float: 'right',
    textTransform: 'none',
  },
  answerIconResult: {
    float: 'right',
    'margin-right': '-20px',
    'margin-top': '5px',
  },
});

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      stopCountDown: false,
      timeRemaining: 0,
      exercise: props.exercise || {},
      currentQuestionIndex: 0,
      currentQuestion: {
        answers: [],
      },
      approximatelyQuestions: 0,
      showNextQuestion: false,
      finish: false,
      testResult: [],
      timeRemainingResult: [], // Do không syn được quả time này nên phải ghi nó ra cái state khác
      correctAnswerCode: '',
      inCorrectAnswerCode: '', // Sẽ có giá trị trong trường hợp chọn sai
      isChecked: false,
    };
  }

  componentDidUpdate(preProps) {
    this.synProps(preProps);
  }

  synProps = preProps => {
    if (!_.isEqual(this.props.exercise, this.state.exercise)) {
      this.setState({ exercise: this.props.exercise });
    }
  };

  handlePickAnswer = (e, selectedAnswer, currentQuestion) => {
    if (this.state.isChecked) {
      return;
    }
    this.stopCountDown();
    this.blockAnswer();
    const result = this.checkAnswer(selectedAnswer, currentQuestion);

    if (!result) {
      const correctAnswer = this.findCorrectAnswer(currentQuestion);
      this.showCorrectAnswer(correctAnswer);
      this.showWrongAnswer(selectedAnswer.answerCode);
    } else {
      this.showCorrectAnswer(selectedAnswer.answerCode);
    }
    this.addAnswerToResult(
      selectedAnswer,
      currentQuestion,
      result,
      this.state.timeRemaining,
    );

    this.enabelButtonNextQuestion();
  };

  blockAnswer = () => {
    this.setState({ isChecked: true });
  };

  findCorrectAnswer = currentQuestion => {
    let correctAnswerCode;
    currentQuestion.answers.forEach(answer => {
      if (this.checkAnswer(answer, currentQuestion)) {
        correctAnswerCode = answer.answerCode;
      }
    });
    return correctAnswerCode;
  };

  showCorrectAnswer = answerCode => {
    this.setState({
      correctAnswerCode: answerCode,
    });
  };

  showWrongAnswer = answerCode => {
    this.setState({
      inCorrectAnswerCode: answerCode,
    });
  };
  // [Todo] Not re-countdown when time up
  handleTimeUp = () => {
    this.blockAnswer();
    const answerCode = this.findCorrectAnswer(this.state.currentQuestion);
    this.showCorrectAnswer(answerCode);
    this.addAnswerToResult({}, this.state.currentQuestion, false, 0);
    this.stopCountDown(); // Need to fill time result
    this.enabelButtonNextQuestion();
  };

  handleStopCountDown = timeRemaining => {
    if (timeRemaining === 0) return;
    const timeResult = {
      questionId: this.state.currentQuestion.id,
      timeRemaining: timeRemaining,
    };
    this.setState({
      timeRemainingResult: [...this.state.timeRemainingResult, timeResult],
    });
  };

  stopCountDown = () => {
    this.setState({ stopCountDown: true, showNextQuestion: true });
  };

  startCountDown = () => {
    this.setState({ stopCountDown: false, showNextQuestion: false });
  };

  enabelButtonNextQuestion = () => {
    this.setState({ showNextQuestion: true });
  };

  getCurrentQuestion = () => {
    const { questions = [] } = this.state.exercise;
    const questionForCheck = questions[this.state.currentQuestionIndex];
    if (!_.isEqual(questionForCheck, this.state.currentQuestion)) {
      this.setState({
        currentQuestion: questionForCheck,
      });
    }

    return questions[this.state.currentQuestionIndex];
  };

  handleNextQuestion = () => {
    this.refeshQuestion();
    const numOfQuestion = this.state.exercise.questions.length;
    if (this.state.currentQuestionIndex < numOfQuestion - 1) {
      this.setState(
        {
          currentQuestionIndex: this.state.currentQuestionIndex + 1,
        },
        () => {
          this.startCountDown();
        },
      );
    } else if (this.state.currentQuestionIndex === numOfQuestion - 1) {
      this.handleFinish();
    }
  };

  refeshQuestion = () => {
    this.setState({
      inCorrectAnswerCode: '',
      correctAnswerCode: '',
      isChecked: false,
      timeRemaining: 0,
      stopCountDown: false,
    });
  };

  addAnswerToResult = (
    selectedAnswer,
    currentQuestion,
    result,
    timeRemaining,
  ) => {
    const { id = '' } = selectedAnswer;
    const resultInfo = {
      answerId: id,
      questionId: currentQuestion.id,
      result: result,
    };
    this.setState({ testResult: [...this.state.testResult, resultInfo] }, () =>
      console.log(this.state.testResult),
    );
  };

  handleFinish = () => {
    debugger;
    this.setState({ finish: true });
    // Merge time result into question result
    let finalResult = [];
    this.state.testResult.forEach(result => {
      const timeResult = this.state.timeRemainingResult.find(x => {
        if (x.id === result.id) {
          return x.timeRemaining;
        }
      });
      result.timeRemaining = timeResult || 0;
      finalResult = [...finalResult, result];
    });
  };

  decrytionAnswer = (encryed, salt) => {
    return decryption(encryed, salt);
  };

  encrytionAnswer = (originalString, salt) => {
    encryptionToString(originalString, salt);
  };

  checkAnswer = (answer, question) => {
    const questionCode = question.questionCode;
    const correctAnswerCode = question.answerCode;
    const chooseAnswerCode = answer.answerCode;

    if (!questionCode || !correctAnswerCode || !chooseAnswerCode) {
      return false;
    } else {
      return (
        this.decrytionAnswer(correctAnswerCode, questionCode) ===
        chooseAnswerCode
      );
    }
  };

  render() {
    const { classes } = this.props;
    const currentQuestion = this.getCurrentQuestion();
    return (
      <Paper className={classes.questionContains} elevation={1}>
        <CountDownClock
          seconds={currentQuestion.countDown}
          onComplete={this.handleTimeUp}
          stop={this.state.stopCountDown}
          handleStop={this.handleStopCountDown}
        />
        <div className={classes.questionTitle}>
          <p className={classes.questionTitleTextLeft}>
            <FormattedMessage {...messages.skillAssessment} />
            <b>{` ${this.state.exercise.skills || 'Other skill'}`}</b>
          </p>
          <p className={classes.questionTitleTextRight}>
            <FormattedMessage
              {...messages.approximatelyQuestion}
              values={{
                countQuestion: `${this.state.approximatelyQuestions || 0}`,
              }}
            />
          </p>
          <LinearProgress
            variant="determinate"
            value={this.state.completed}
            className={classes.questionTitleProgressBar}
          />
        </div>
        <Typography variant="h5" gutterBottom className={classes.questionText}>
          {currentQuestion.detail ||
            `Sample question: If you are creating an application where your goal is to separate the logic from the user interface, what should you create?`}
        </Typography>
        <List component="nav" className={classes.answerList}>
          {currentQuestion.answers.map(answer => {
            let isFailClass =
              this.state.inCorrectAnswerCode &&
              answer.answerCode === this.state.inCorrectAnswerCode
                ? classes.answerItemFail
                : '';
            let isTrueClass =
              this.state.correctAnswerCode &&
              answer.answerCode === this.state.correctAnswerCode
                ? classes.answerItemTrue
                : '';
            return (
              <ListItem
                onClick={event =>
                  this.handlePickAnswer(event, answer, currentQuestion)
                }
                className={isTrueClass || isFailClass || classes.answerItem}
              >
                <ListItemText
                  color="inherit"
                  primary={answer.detail}
                  className={classes.answerItemText}
                />
                <div className={classes.answerIconResult}>
                  {/* show wrong question */}
                  {isFailClass ? (
                    <Zoom in={true}>
                      <Close />
                    </Zoom>
                  ) : (
                    ''
                  )}
                  {/* show correct question */}
                  {isTrueClass ? (
                    <Zoom in={true}>
                      <Check />
                    </Zoom>
                  ) : (
                    ''
                  )}
                </div>
              </ListItem>
            );
          })}
        </List>
        <div className={classes.questionFooter}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.buttonNextQuestion}
            disabled={!this.state.showNextQuestion}
            onClick={() => this.handleNextQuestion()}
          >
            {this.state.finish ? (
              <FormattedMessage {...messages.finish} />
            ) : (
              <FormattedMessage {...messages.nextQuestion} />
            )}
          </Button>
          <div style={{ clear: 'both' }} />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Question);
