import React, { Component } from 'react';
import { Button, Screen } from '@blankapp/ui';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Form, TextInputLayout } from '../../components';
import { sharedApiClient as apiClient } from '../../services';
import { loginSuccess } from '../../redux/actions/auth';
import { t } from '../../utilities/I18n';

class Register extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.register.title'),
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
    this.pressRegister = this.pressRegister.bind(this);
    this.state = {
      email: '',
      password: '',
      errors: [],
    };
  }

  async pressRegister() {
    const { email, password } = this.state;
    const { errors, data: user } = await apiClient.sendRequest('/account/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (errors) {
      this.setState({ errors });
    } else {
      this.props.loginSuccess(user);
      this.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      }));
    }
  }

  render() {
    const isVaild = this.state.email.length === 0 || this.state.password.length === 0;
    const { errors } = this.state;
    const emailErr = errors.find(err => err.field === 'email');
    const passwordErr = errors.find(err => err.field === 'password');
    return (
      <Screen>
        <Form>
          <TextInputLayout
            placeholder={t('screens.login.placeholderEmail')}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            errMsg={emailErr ? emailErr.message : ''}
          />
          <TextInputLayout
            placeholder={t('screens.login.placeholderPassword')}
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
            errMsg={passwordErr ? passwordErr.message : ''}
          />
          <Button
            text={t('screens.login.buttonRegister')}
            disabled={isVaild}
            onPress={this.pressRegister}
          />
        </Form>
      </Screen>
    );
  }
}

export default connect(null, { loginSuccess })(Register);
