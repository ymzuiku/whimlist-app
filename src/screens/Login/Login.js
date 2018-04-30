import React, { Component } from 'react';
import { Button, Screen, TextInput, HyperlinkButton } from '@blankapp/ui';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as auth from '../../redux/actions/auth';

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

  pressLogin = async () => {
    const { handleLogin } = this.props; // eslint-disable-line
    try {
      await handleLogin(this.state);

      this.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      }));
    } catch (error) {
      alert(error.message);
    }
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

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  handleLogin: async (data) => {
    dispatch(await auth.login(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

