import React from 'react';
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

const styles = theme => ({
  questionContains: {
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
  },
});

const mockAnswer = [
  'An HTML/CSS application',
  'A WPF application',
  'A windows form application',
  'A WCF application',
];

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    // const { completed } = this.state;
    // if (completed === 100) {
    //   this.setState({ completed: 0 });
    // } else {
    //   const diff = Math.random() * 10;
    //   this.setState({ completed: Math.min(completed + diff, 100) });
    // }
  };

  handleListItemClick = (e, ansewrId) => {
    console.log('ansewrId', ansewrId);
  };

  render() {
    const { classes, questions = { answers: mockAnswer } } = this.props;
    return (
      <Paper className={classes.questionContains} elevation={1}>
        <div className={classes.questionTitle}>
          <p className={classes.questionTitleTextLeft}>
            Skill assessment:
            <b>{` ${this.props.skills || 'Other skill'}`}</b>
          </p>
          <p className={classes.questionTitleTextRight}>
            {`Approximately ${this.state.approximatelyQuestions ||
              0} questions remaining`}
          </p>
          <LinearProgress
            variant="determinate"
            value={this.state.completed}
            className={classes.questionTitleProgressBar}
          />
        </div>
        <Typography variant="h5" gutterBottom className={classes.questionText}>
          {questions.detail ||
            `If you are creating an application where your goal is to separate the logic from the user interface, what should you create?`}
        </Typography>
        <List component="nav" className={classes.answerList}>
          {questions.answers.map(answer => {
            return (
              <ListItem
                onClick={event => this.handleListItemClick(event, 1)}
                className={classes.answerItem}
              >
                <ListItemText
                  primary={answer}
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
            color="primaryColor"
            className={classes.buttonNextQuestion}
          >
            Next Question
          </Button>
          <div style={{ clear: 'both' }} />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Question);
