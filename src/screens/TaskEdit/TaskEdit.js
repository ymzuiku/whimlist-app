import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';
import { t } from '../../utilities/I18n';

class TaskEdit extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.taskEdit.title'),
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
        <Text>TaskEdit</Text>
      </Screen>
    );
  }
}

export default TaskEdit;
