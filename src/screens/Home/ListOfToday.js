import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';
import { StackNavigator } from 'react-navigation';

import stackConfig from './stackConfig';

class ListOfToday extends Component {
  static navigationOptions = {
    title: 'List Of Today',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>ListOfToday</Text>
      </Screen>
    );
  }
}

export default StackNavigator({
  ListOfToday: {
    screen: ListOfToday,
  },
}, stackConfig);
