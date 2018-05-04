import React, { Component } from 'react';
import { Button, Screen, TextInput } from '@blankapp/ui';
import { Form } from '../../components';

class ForgotPassword extends Component {
  static navigationOptions = {
    title: 'ForgotPassword',
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
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <Button
            text="Send"
            disabled={isVaild}
            onPress={this.pressSend}
          />
        </Form>
      </Screen>
    );
  }
}

export default ForgotPassword;
