/**
 *
 * ExerciseListPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { createStructuredSelector } from "reselect";
import { compose, bindActionCreators } from "redux";

import injectSaga from "../../../utils/injectSaga";
import injectReducer from "../../../utils/injectReducer";
import makeSelectExerciseListPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import * as actions from "./actions";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
/* eslint-disable react/prefer-stateless-function */
export class ExerciseListPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>ExerciseListPage</title>
          <meta name="description" content="Description of ExerciseListPage" />
        </Helmet>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>List Exercise</h4>
                {/* <p className={classes.cardCategoryWhite}>
                
                </p> */}
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Country", "City", "Salary"]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                    [
                      "Philip Chaney",
                      "Korea, South",
                      "Overland Park",
                      "$38,735"
                    ],
                    [
                      "Doris Greene",
                      "Malawi",
                      "Feldkirchen in Kärnten",
                      "$63,542"
                    ],
                    ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ExerciseListPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  exerciselistpage: makeSelectExerciseListPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withStyle = withStyles(styles);

const withReducer = injectReducer({ key: "exerciseListPage", reducer });
const withSaga = injectSaga({ key: "exerciseListPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle
)(ExerciseListPage);
