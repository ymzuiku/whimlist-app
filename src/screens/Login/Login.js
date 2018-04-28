import React, { Component } from 'react';
import { Button, Screen, TextInput, HyperlinkButton } from '@blankapp/ui';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.state = {
      email: '',
      password: '',
    };
  }

  pressLogin = () => {
    alert('Comming soon');
  }

  pressForgotPassword = () => {
    this.navigation.navigate('ForgotPassword');
  }

  pressRegister = () => {
    this.navigation.navigate('Register');
  }

  render() {
    const isVaild = this.state.email.length === 0 || this.state.password.length === 0;
    return (
      <Screen>
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
        />
        <Button
          text="Login"
          disabled={isVaild}
          onPress={this.pressLogin}
        />
        <HyperlinkButton
          text="Forgot Password?"
          onPress={this.pressForgotPassword}
        />
        <HyperlinkButton
          text="Register"
          onPress={this.pressRegister}
        />
      </Screen>
    );
  }
}

export default Login;
