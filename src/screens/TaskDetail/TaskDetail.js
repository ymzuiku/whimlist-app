import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class TaskDetail extends Component {
  static navigationOptions = {
    title: 'TaskDetail',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>TaskDetail</Text>
      </Screen>
    );
  }
}

export default TaskDetail;
