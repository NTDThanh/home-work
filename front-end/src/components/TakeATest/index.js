import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Question from './Question';

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  flex: {
    flex: 1,
  },
  buttonClose: {
    float: 'right',
    maxWidth: 70,
  },
  testBackgound: {
    backgroundColor: '#181818 !important',
    color: 'white',
    minHeight: '100vh',
  },
};

const mockExercises = {
  name: 'EF Core',
  skillsName: 'Entity FrameWork Core 2.1',
  level: 'Begin',
  questions: [
    {
      id: 1,
      questionCode: 'abc123!',
      answerCode: 'U2FsdGVkX1/PX2x2zBKhWoD4IohIUnIihW0XmYv+Kjc=',
      choosedAnswer: '',
      detail:
        '1.What do you need to install in order to use EF Core CLI commands?',
      countDown: 5,
      answers: [
        {
          id: 1,
          detail: '.1NET SDK appropriate for your OS',
          answerCode: 'fhgstti',
        },
        {
          id: 2,
          detail: '1Visual Studio Code for your OS',
          answerCode: 'fhgstta',
        },
        {
          id: 3,
          detail: '1Visual Studio 2017 15.3 or higher on Windows only',
          answerCode: 'fhgsttb',
        },
        {
          id: 4,
          detail: '1.NET Framework 4.7.2',
          answerCode: 'fhgsttc',
        },
      ],
    },
    {
      id: 2,
      questionCode: 'abc123!',
      answerCode: 'U2FsdGVkX1/PX2x2zBKhWoD4IohIUnIihW0XmYv+Kjc=',
      detail:
        '2.What do you need to install in order to use EF Core CLI commands?',
      countDown: 3,
      answers: [
        {
          id: 1,
          detail: '3.NET SDK appropriate for your OS',
          answerCode: 'fhgsttis',
        },
        {
          id: 2,
          detail: '2Visual Studio Code for your OS',
          answerCode: 'fhgstti',
        },
        {
          id: 3,
          detail: '3Visual Studio 2017 15.3 or higher on Windows only',
          answerCode: 'fhgsttb',
        },
        {
          id: 4,
          detail: '4.NET Framework 4.7.2',
          answerCode: 'fhgsttc',
        },
      ],
    },
    {
      id: 3,
      questionCode: 'abc123!',
      answerCode: 'U2FsdGVkX1/PX2x2zBKhWoD4IohIUnIihW0XmYv+Kjc=',
      choosedAnswer: '',
      detail:
        '3.What do you need to install in order to use EF Core CLI commands?',
      countDown: 5,
      answers: [
        {
          id: 1,
          detail: '.NET SDK appropriate for your OS',
          answerCode: 'fhgstti',
        },
        {
          id: 2,
          detail: 'Visual Studio Code for your OS',
          answerCode: 'fhgstta',
        },
        {
          id: 3,
          detail: 'Visual Studio 2017 15.3 or higher on Windows only',
          answerCode: 'fhgsttb',
        },
        {
          id: 4,
          detail: '.NET Framework 4.7.2',
          answerCode: 'fhgsttc',
        },
      ],
    },
  ],
  numberOfQuestion: 6,
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TakeATest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: mockExercises,
    };
  }

  render() {
    const { classes, exercise = {} } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.handleClose}
          TransitionComponent={Transition}
        >
          <div className={classes.testBackgound}>
            <IconButton
              color="inherit"
              onClick={this.props.handleClose}
              aria-label="Close"
              className={classes.buttonClose}
            >
              <CloseIcon />
            </IconButton>
            <DialogTitle id="responsive-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <GridContainer
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <GridItem xs={12} sm={12} md={8}>
                  <Question exercise={this.state.exercise} />
                </GridItem>
              </GridContainer>
            </DialogContent>
            <DialogActions />
            <div style={{ clear: 'both' }} />
          </div>
        </Dialog>
      </div>
    );
  }
}

TakeATest.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
};

export default withStyles(styles)(TakeATest);

// Encryption -

//Encryption - lúc đăng ký
// 1. Mỗi answer, question sẽ có một key - render bằng shortid
// 2. Đáp án đúng được mã hóa lưu trong quuestion.alignItems
// 3. Công thức của đáp án đúng là encryption từ key của câu hỏi với câu trả lời.
