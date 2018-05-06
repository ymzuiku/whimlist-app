import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';
import { t } from '../../utilities/I18n';

class ListNew extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.listNew.title'),
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
        <Text>ListNew</Text>
      </Screen>
    );
  }
}

export default ListNew;
