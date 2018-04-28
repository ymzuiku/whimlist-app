import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class UserProfile extends Component {
  static navigationOptions = {
    title: 'UserProfile',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>UserProfile</Text>
      </Screen>
    );
  }
}

export default UserProfile;
