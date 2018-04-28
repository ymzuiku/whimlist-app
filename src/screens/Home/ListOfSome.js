import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';
import { StackNavigator } from 'react-navigation';

import stackConfig from './stackConfig';

class ListOfSome extends Component {
  static navigationOptions = {
    title: 'List Of Some',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>ListOfSome</Text>
      </Screen>
    );
  }
}

export default StackNavigator({
  ListOfSome: {
    screen: ListOfSome,
  },
}, stackConfig);
