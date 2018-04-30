import React, { Component } from 'react';
import { Divider, FlatList, Screen } from '@blankapp/ui';
import { StackNavigator } from 'react-navigation';
import { ListItem } from '../../components';
import NavigationService from '../../navigators/NavigationService';

import stackConfig from './stackConfig';

class ListOfSome extends Component {
  static navigationOptions = {
    title: 'List Of Some',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.state = {
      itemsSource: [
        {
          title: 'Item 1',
        },
        {
          title: 'Item 2',
        },
      ],
    };
  }

  renderItem({ item }) {
    const { title } = item;
    return (
      <ListItem
        title={title}
        onPress={() => NavigationService.navigate('TaskDetail')}
      />
    );
  }

  render() {
    return (
      <Screen>
        <FlatList
          data={this.state.itemsSource}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <Divider />}
        />
      </Screen>
    );
  }
}

export default StackNavigator({
  ListOfSome: {
    screen: ListOfSome,
  },
}, stackConfig);
