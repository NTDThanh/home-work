/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Row, Col } from 'antd';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';
import messages from './messages';
import CategoryItemMedium from '../../components/CategoryItemMedium';
// eslint-disable-next-line
import categoryItemMediumStyle from '../../components/CategoryItemMedium/style.less';
import * as globalStyle from '../../global-styles';
import BigAlert from '../../components/BigAlert';
// eslint-disable-next-line
import styles from './styles.less';
import BreadcrumbWithTitle from '../../components/BreadcrumbWithTitle';
import FilterList from '../../components/FilterList';
import ButtonWithLargeIcon from '../../components/ButtonWithLargeIcon';

const mockCategory = [
  {
    categoryName: 'Tests',
    number: 123,
    iconName: 'profile',
    grandients: globalStyle.GrandientsBlue,
  },
  {
    categoryName: 'Fields',
    number: '05',
    iconName: 'fork',
    grandients: globalStyle.GrandientsOrange,
  },
  {
    categoryName: 'Examinee',
    number: 20,
    iconName: 'team',
    grandients: globalStyle.GrandientsYellow,
  },
  {
    categoryName: 'Create test',
    number: 123,
    iconName: 'form',
    grandients: globalStyle.GrandientsGreen,
  },
];
const mockListUrlForBreabcrumb = [
  { url: 'home', urlName: 'Home' },
  { url: 'profile', urlName: 'Profile' },
  { url: 'favorite', urlName: 'Favorite' },
];

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  state = {
    listDisplayType: 'grid',
  };

  handleChangeDisplayType = () => {
    const { listDisplayType } = this.state;
    this.setState({
      listDisplayType: listDisplayType === 'grid' ? 'list' : 'grid',
    });
  };

  render() {
    const displayTypeIcon =
      this.state.listDisplayType === 'grid' ? 'appstore' : 'database';
    const displayTypeButtonFocus = this.state.listDisplayType !== 'grid';
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <Row gutter={25}>
          {mockCategory.map(item => (
            <Col span={24 / 4}>
              <CategoryItemMedium {...item} />
            </Col>
          ))}
        </Row>
        <Row className="home-big-alert">
          <BigAlert
            grandients={globalStyle.GrandientsAlert}
            iconGrandients={globalStyle.GrandientsYellow}
            iconName="star"
            buttonText="Join Us"
            header="Test you skills"
            subHeader="For free"
          />
        </Row>
        <Row className="home-title-filter" gutter={15}>
          <Col span={18}>
            <BreadcrumbWithTitle
              header="Based on your profile and favorite"
              listUrl={mockListUrlForBreabcrumb}
            />
          </Col>
          <Col span={6}>
            <div style={{ float: 'right' }}>
              <ul className="home-list-actions">
                <li>
                  <FilterList dropdown />
                </li>
                <li>
                  <ButtonWithLargeIcon
                    iconName={displayTypeIcon}
                    onClick={this.handleChangeDisplayType}
                    focus={displayTypeButtonFocus}
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
