import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class TaskNew extends Component {
  static navigationOptions = {
    title: 'TaskNew',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>TaskNew</Text>
      </Screen>
    );
  }
}

export default TaskNew;
