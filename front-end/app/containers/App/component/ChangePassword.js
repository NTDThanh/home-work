import React, { PureComponent } from 'react';
import { Form, Input, Modal, Button, Alert } from 'antd';
import AppSession from '../../../utils/appSession';
import * as globalConstants from '../../../constants';

const REGEX_CHECK_ALPHA_NUMBERIC = /^[a-zA-Z\s.,0-9@#$%*():;""'/?!+=_-]{1,10000}$/;
const MESSAGE_COMPARE_PASWORD =
  '確認パスワードがパスワードと一致していません。';
const ABC = 'パスワードが変更されました。';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const appSession = new AppSession();
class ChangePassword extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { confirmDirty: false };
  }

  validateToNextPassword = (rule, value, callback) => {
    if (value && value.trim() === '') {
      callback(globalConstants.MESSAGE_NULL);
    }
    if (value && !REGEX_CHECK_ALPHA_NUMBERIC.test(value.trim())) {
      callback(globalConstants.MESSAGE_NOT_LATIN);
    }

    if (value && value.trim().length >= 8 && value.trim().length <= 32) {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
    } else if (value && value.length > 0) {
      callback('8~32文字以内で入力してください。');
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && value.trim() === '') {
      callback(globalConstants.MESSAGE_NULL);
    }

    if (value && !REGEX_CHECK_ALPHA_NUMBERIC.test(value.trim())) {
      callback(globalConstants.MESSAGE_NOT_LATIN);
    }

    if (value && value !== form.getFieldValue('password')) {
      callback(MESSAGE_COMPARE_PASWORD);
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const value = e.target;
    const confirmDirty = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  showMessageError = () => {
    const { stateAll } = this.props;
    if (stateAll && stateAll.status === 200) {
      return <Alert message={ABC} type="Info Text" showIcon />;
    }
    return '';
  };

  handleBadRequest = () => {
    if (
      this.props.messsageFromApi &&
      this.props.messsageFromApi.status === 400
    ) {
      this.validateToNextPassword();
    }
  };

  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    // this.handleBadRequest();
    return (
      <Modal
        visible={visible}
        width={450}
        title="パスワード変更"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
        footer={[
          <Button key="submit" type="primary" onClick={onCreate}>
            変更
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item {...formItemLayout} label="ユーザーID">
            {getFieldDecorator('Id', {
              initialValue: appSession.getUserId(),
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="新パスワード">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: globalConstants.MESSAGE_NULL,
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input type="password" autoFocus />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="新パスワード確認">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: globalConstants.MESSAGE_NULL,
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          {this.showMessageError}
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(ChangePassword);
