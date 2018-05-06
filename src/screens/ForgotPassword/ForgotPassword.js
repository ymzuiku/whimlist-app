import React, { Component } from 'react';
import { Button, Screen, TextInput } from '@blankapp/ui';
import { Form } from '../../components';
import { t } from '../../utilities/I18n';

class ForgotPassword extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.forgotPassword.title'),
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.state = {
      email: '',
    };
  }

  pressSend() {
    alert('Comming soon');
  }

  render() {
    const isVaild = this.state.email.length === 0;
    return (
      <Screen>
        <Form>
          <Form.Field>
            <TextInput
              placeholder={t('screens.forgotPassword.placeholderEmail')}
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              keyboardType="email-address"
            />
          </Form.Field>
          <Form.Field>
            <Button
              text={t('screens.forgotPassword.buttonSend')}
              disabled={isVaild}
              onPress={this.pressSend}
            />
          </Form.Field>
        </Form>
      </Screen>
    );
  }
}

export default ForgotPassword;
