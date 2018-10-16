import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components

import cardAvatarStyle from "assets/jss/material-dashboard-react/components/cardAvatarStyle.jsx";
import Button from "@material-ui/core/Button";
import AddAPhoto from "@material-ui/icons/AddAPhoto";

const styles = {
  buttonPick: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    zIndex: 999
  },
  buttonUpload: {
    color: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
};
class CardAvatar extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      classes,
      children,
      className,
      plain,
      isUpload,
      profile,
      ...rest
    } = this.props;
    const cardAvatarClasses = classNames({
      [classes.cardAvatar]: true,
      [classes.cardAvatarProfile]: profile,
      [classes.cardAvatarPlain]: plain,
      [className]: className !== undefined
    });
    return (
      <div
        className={cardAvatarClasses}
        style={isUpload && { backgroundColor: "#00acc1" }}
        {...rest}
      >
        {children}
        {isUpload ? (
          <div>
            <Button style={styles.buttonUpload}>
              <AddAPhoto />
              Upload Image
            </Button>
            <input style={styles.buttonPick} type="file" name="upload" />
          </div>
        ) : null}
      </div>
    );
  }
}

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};

export default withStyles(cardAvatarStyle)(CardAvatar);
