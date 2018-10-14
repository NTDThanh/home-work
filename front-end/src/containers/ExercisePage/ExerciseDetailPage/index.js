/**
 *
 * ExerciseDetailPage
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
import makeSelectExerciseDetailPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

const styles = {};
/* eslint-disable react/prefer-stateless-function */
export class ExerciseDetailPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>ExerciseDetailPage</title>
          <meta
            name="description"
            content="Description of ExerciseDetailPage"
          />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ExerciseDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  exercisedetailpage: makeSelectExerciseDetailPage()
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
const withReducer = injectReducer({ key: "exerciseDetailPage", reducer });
const withSaga = injectSaga({ key: "exerciseDetailPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle
)(ExerciseDetailPage);
