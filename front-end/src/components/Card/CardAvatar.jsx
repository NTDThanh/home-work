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
import loadImage from "blueimp-load-image";

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
    zIndex: 9999
  },
  buttonUpload: {
    color: "white",
    position: "absolute",
    top: 20,
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
    this.state = {
      image: ""
    };
  }

  // #region Handle resize image
  handlePickImage = e => {
    const { target } = e;
    if (!target) return;
    if (!target.files[0]) return;
    const imageName = target.files[0].name;
    const checkExtension = /\.(jpg|jpeg|png)$/i;
    // If is not imagefile retrun
    if (!checkExtension.test(imageName)) {
      return;
    }
    this.handleResizeAndRotationImage(target.files[0]);
  };

  handleResizeAndRotationImage = file => {
    loadImage(
      file,
      canvas => {
        this.handleAddImage(canvas);
      },
      { maxWidth: 130, maxHeight: 130, canvas: true, orientation: true } // Options
    );
  };

  handleAddImage = canvas => {
    if (this.props.isUpload) {
      // Save canvas to state
      const binary = canvas.toDataURL();
      this.props.handlePickImage(binary);
    }
  };

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
    const avartarBackground = this.props.image
      ? {
          backgroundImage: `url(${this.props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }
      : { backgroundColor: "#00acc1" };
    return (
      <div
        className={cardAvatarClasses}
        style={isUpload && avartarBackground}
        {...rest}
      >
        {children}
        {isUpload ? (
          <div>
            <Button style={styles.buttonUpload}>
              <AddAPhoto />
            </Button>
            <input
              style={styles.buttonPick}
              type="file"
              name="upload"
              onChange={this.handlePickImage}
            />
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
