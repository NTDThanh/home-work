import React, { PureComponent } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

// eslint-disable-next-line
class MainFooter extends PureComponent {
  render() {
    return <Footer style={{ textAlign: 'center' }} />;
  }
}

export default MainFooter;
