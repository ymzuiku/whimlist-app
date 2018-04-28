import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class Example extends Component {
  static navigationOptions = {
    title: 'Example',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>Example</Text>
      </Screen>
    );
  }
}

export default Example;
