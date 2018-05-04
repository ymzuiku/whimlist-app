import React, { Component } from 'react';
import { Button, HyperlinkButton, Screen, Text, TextInput, View } from '@blankapp/ui';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Form } from '../../components';
import * as auth from '../../redux/actions/auth';
import { sharedApiClient as apiClient } from '../../services';

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
      processing: false,
    };
  }

  pressLogin = async () => {
    const { loginSuccess } = this.props;
    const { email, password } = this.state;
    try {
      this.setState({ processing: true });
      const res = await apiClient.sendRequest('/account/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      loginSuccess(res.data);

      this.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ processing: false });
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
        <Form>
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
            loading={this.state.processing}
            onPress={this.pressLogin}
          />
        </Form>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>{'Don\'t have an account? '}</Text>
          <HyperlinkButton
            text="Register"
            onPress={this.pressRegister}
          />
        </View>
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  loginSuccess: (data) => {
    dispatch(auth.loginSuccess(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
