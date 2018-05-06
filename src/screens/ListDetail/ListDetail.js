import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';

class ListDetail extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: 'ListDetail',
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
        <Text>ListDetail</Text>
      </Screen>
    );
  }
}

export default ListDetail;
