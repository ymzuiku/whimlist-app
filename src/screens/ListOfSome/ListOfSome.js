import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, FlatList, Screen } from '@blankapp/ui';
import { AppBar } from '@blankapp/ui-pro';
import { ListItem } from '../../components';
import NavigationService from '../../navigators/NavigationService';
import { t } from '../../utilities/I18n';

class ListOfSome extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const task = params ? params.task || {} : {};

    return {
      title: task.title || t('screens.listOfSome.title'),
      headerRight: (
        <AppBar.IconButton
          iconName="more-horiz"
          onPress={() => alert('Comming soon')}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.state = {
      // task: {
      //   id: this.navigationParams.taskId,
      // },
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

  componentDidMount() {
    this.navigation.setParams({ task: this.state.task });
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
        <SafeAreaView>
          <Divider />
          <ListItem
            title={t('screens.listOfToday.buttonNewTask')}
            onPress={() => NavigationService.navigate('TaskNew', { listId: 0 })}
          />
        </SafeAreaView>
      </Screen>
    );
  }
}

export default ListOfSome;
