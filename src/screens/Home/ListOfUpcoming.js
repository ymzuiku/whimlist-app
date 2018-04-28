import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';
import { StackNavigator } from 'react-navigation';

import stackConfig from './stackConfig';

class ListOfUpcoming extends Component {
  static navigationOptions = {
    title: 'List Of Upcoming',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>ListOfUpcoming</Text>
      </Screen>
    );
  }
}

export default StackNavigator({
  ListOfUpcoming: {
    screen: ListOfUpcoming,
  },
}, stackConfig);
