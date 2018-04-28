import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>Settings</Text>
      </Screen>
    );
  }
}

export default Settings;
