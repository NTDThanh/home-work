import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CountDownClock from '../CountDown/CountDownClock';
import RichEditor from '../RichEditor/index';

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
  },
  answerItemText: {
    fontSize: '18px',
    fontWeight: 200,
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
});

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      completed: 0,
      stopCountDown: false,
      timeRemaining: 0,
      exercise: props.exercise || {},
      currentQuestionIndex: 0,
      approximatelyQuestions: 0,
      showNextQuestion: false,
    };
  }

  componentDidUpdate(preProps) {
    this.synProps(preProps);
  }

  synProps = preProps => {
    // this.setState({ exercise: this.props.exercise });
  };

  handlePickAnswer = (e, ansewrId) => {
    this.stopCountDown();
    this.enabelButtonNextQuestion();
  };

  handleTimeUp = () => {};

  hanldePickAnswer = answerId => {};

  handleStopCountDown = timeRemaining => {
    this.setState({ timeRemaining });
  };

  stopCountDown = () => {
    this.setState({ stopCountDown: true });
  };

  enabelButtonNextQuestion = () => {
    this.setState({ showNextQuestion: true });
  };

  getCurrentQuestion = () => {
    const { questions = [] } = this.state.exercise;
    return questions[this.state.currentQuestionIndex];
  };

  handleNextQuestion = () => {
    debugger;
    console.log(this);
    if (
      this.state.currentQuestionIndex < this.state.exercise.questions.lenght
    ) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
      });
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
            return (
              <ListItem
                onClick={event => this.handlePickAnswer(event, answer.ansewrId)}
                className={classes.answerItem}
              >
                <ListItemText
                  primary={answer.detail}
                  className={classes.answerItemText}
                />
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
            onClick={this.handleNextQuestion}
          >
            <FormattedMessage {...messages.nextQuestion} />
          </Button>
          <div style={{ clear: 'both' }} />
        </div>
        <div id="richEdit" />
        {ReactDOM.render(<RichEditor />, document.getElementById('richEdit'))}
      </Paper>
    );
  }
}

export default withStyles(styles)(Question);
