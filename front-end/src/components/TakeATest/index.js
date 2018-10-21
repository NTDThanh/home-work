import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
    height: '100%',
    color: 'white',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TakeATest extends React.Component {
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
                  <Question />
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
