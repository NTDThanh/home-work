/**
 *
 * ExerciseCreateEditPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectExerciseCreateEditPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

const styles = {};
/* eslint-disable react/prefer-stateless-function */
export class ExerciseCreateEditPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>ExerciseCreateEditPage</title>
          <meta
            name="description"
            content="Description of ExerciseCreateEditPage"
          />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ExerciseCreateEditPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  exercisecreateeditpage: makeSelectExerciseCreateEditPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withStyle = withStyles(styles);
const withReducer = injectReducer({ key: "exerciseCreateEditPage", reducer });
const withSaga = injectSaga({ key: "exerciseCreateEditPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle
)(ExerciseCreateEditPage);
