import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class ListNew extends Component {
  static navigationOptions = {
    title: 'ListNew',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>ListNew</Text>
      </Screen>
    );
  }
}

export default ListNew;
