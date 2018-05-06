import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, FlatList, Screen } from '@blankapp/ui';
import { ListEmptyIndicator, ListItem } from '../../components';
import NavigationService from '../../navigators/NavigationService';
import { t } from '../../utilities/I18n';

class ListOfToday extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.listOfToday.title'),
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.state = {
      itemsSource: [
        // {
        //   title: 'Item 1',
        // },
        // {
        //   title: 'Item 2',
        // },
      ],
    };
  }

  renderListEmpty() {
    return (
      <ListEmptyIndicator
        title={t('screens.listOfUpcoming.listEmptyTitle')}
        message={t('screens.listOfUpcoming.listEmptyMessage')}
      />
    );
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
          ListEmptyComponent={() => this.renderListEmpty()}
        />
        <SafeAreaView>
          <Divider />
          <ListItem
            title={t('screens.listOfToday.buttonNewTask')}
            onPress={() => NavigationService.navigate('TaskNew', { listSlug: 'today' })}
          />
        </SafeAreaView>
      </Screen>
    );
  }
}

export default ListOfToday;
