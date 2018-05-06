import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class ListEdit extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: 'ListEdit',
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;
  }

  render() {
    return (
      <Screen>
        <Text>ListEdit</Text>
      </Screen>
    );
  }
}

export default ListEdit;
