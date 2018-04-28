import React, { Component } from 'react';
import { Button, Screen, TextInput } from '@blankapp/ui';

class Register extends Component {
  static navigationOptions = {
    title: 'Register',
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

  pressRegister() {
    alert('Comming soon');
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
          text="Register"
          disabled={isVaild}
          onPress={this.pressRegister}
        />
      </Screen>
    );
  }
}

export default Register;
