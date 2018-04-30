import React, { Component } from 'react';
import { ActivityIndicator, Screen } from '@blankapp/ui';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class Initialize extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  componentDidMount() {
    setTimeout(() => {
      const { auth } = this.props; // eslint-disable-line
      const routeName = auth.isLoggedIn ? 'Home' : 'Login';

      this.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
      }));
    }, 300);
  }

  render() {
    return (
      <Screen
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator />
      </Screen>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Initialize);
