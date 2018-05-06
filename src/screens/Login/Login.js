import React, { Component } from 'react';
import { Button, HyperlinkButton, Screen, Text, TextInput, View } from '@blankapp/ui';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Form } from '../../components';
import * as auth from '../../redux/actions/auth';
import { sharedApiClient as apiClient } from '../../services';
import { t } from '../../utilities/I18n';

class Login extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.login.title'),
    };
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
          <Form.Field>
            <TextInput
              placeholder={t('screens.login.placeholderEmail')}
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              keyboardType="email-address"
            />
          </Form.Field>
          <Form.Field
            style={{
              flexDirection: 'row',
            }}
          >
            <TextInput
              placeholder={t('screens.login.placeholderPassword')}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              maxLength={32}
              secureTextEntry
            />
            <HyperlinkButton
              style={{
                position: 'absolute',
                right: 10,
              }}
              text={t('screens.login.buttonForgotPassword')}
              onPress={this.pressForgotPassword}
            />
          </Form.Field>
          <Form.Field>
            <Button
              text={t('screens.login.buttonLogin')}
              disabled={isVaild}
              loading={this.state.processing}
              onPress={this.pressLogin}
            />
          </Form.Field>
        </Form>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>{t('screens.login.messageDoNotHaveAnAccount')}</Text>
          <HyperlinkButton
            text={t('screens.login.buttonRegister')}
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
