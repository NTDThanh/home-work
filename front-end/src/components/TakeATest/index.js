import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const styles = {
  appBar: {
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.9)"
  },
  flex: {
    flex: 1
  },
  buttonClose: {
    float: "right",
    maxWidth: 70
  },
  paperScrollPaper: {
    backgroundColor: "rgba(0,0,0,0.9)",
    border: "6px solid #ccc"
  },
  paperFullScreen: {
    backgroundColor: "rgba(0,0,0,0.9)",
    border: "6px solid #ccc"
  }
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
          className={(classes.paperScrollPaper, classes.paperFullScreen)}
        >
          <IconButton
            color="inherit"
            onClick={this.props.handleClose}
            aria-label="Close"
            className={classes.buttonClose}
          >
            <CloseIcon />
          </IconButton>
          <GridContainer
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <GridItem xs={12} sm={12} md={10}>
              <h1>Item 1</h1>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <h1>Item 1</h1>
            </GridItem>
          </GridContainer>
          {/* <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem>
          </List> */}
        </Dialog>
      </div>
    );
  }
}

TakeATest.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func
};

export default withStyles(styles)(TakeATest);
