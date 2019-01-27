/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import HomePage from 'containers/HomePage/Loadable';

import { Helmet } from 'react-helmet';
import TopHeader from './component/Header';
import MainFooter from './component/Footer';
import styles from './styles.less'; // eslint-disable-line
import TabMenu from '../../components/TabMenu';
import AppBarOnTop from './AppBarOnTop';
// import ControlArea from '../../components/ControlArea';
// import AuthorityControl from '../../components/AuthorityControl';
// import * as globalConst from '../../constants';
import style from './styles.less';

const { Content } = Layout;

// eslint-disable-next-line
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageReload: false,
    };
  }

  handleLogoutAction = () => {
    this.reloadAppPage();
  };

  reloadAppPage = () => {
    const { pageReload: reloadThisPage } = this.state;
    this.setState({
      pageReload: !reloadThisPage,
    });
  };

  windowReload = () => {
    window.location.reload();
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Helmet>
            <title>Home-word</title>
            <meta name="description" content="Home-word" />
          </Helmet>
          <Layout style={{ minHeight: '100vh' }}>
            <AppBarOnTop>
              <Content>
                <div className="main">
                  <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/login" component={HomePage} />
                  </Switch>
                </div>
              </Content>
              <MainFooter />
            </AppBarOnTop>
          </Layout>
          {/* </ControlArea> */}
        </React.Fragment>
      </Router>
    );
  }
}
