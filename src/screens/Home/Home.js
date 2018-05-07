import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { sharedApiClient as apiClient } from '../../services';
import HomeNavigator from './HomeNavigator';
import { Alert, DeviceEventEmitter } from '../../modules';
import { t } from '../../utilities/I18n';

class Home extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.home.title'),
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.handleTokenExpiredEvent = this.handleTokenExpiredEvent.bind(this);
    this.loadData = this.loadData.bind(this);

    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('tokenExpiredEvent', this.handleTokenExpiredEvent);
    setTimeout(async () => {
      await this.loadData();
    });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('tokenExpiredEvent', this.handleTokenExpiredEvent);
  }

  handleTokenExpiredEvent() {
    Alert.alert(
      t('globals.messageTokenExpired'),
      undefined,
      [
        {
          text: t('modules.alert.ok'),
          onPress: () => {
            this.navigation.dispatch(NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Login' })],
            }));
          },
        },
      ],
      { cancelable: false },
    );
  }

  async loadData() {
    try {
      const res = await apiClient.sendRequest('/lists');
      const lists = res.data || [];

      this.setState({ lists });
    } catch (error) {
      // alert(error.message);
    }
  }

  render() {
    const N = HomeNavigator(this.state.lists);
    return (
      <N />
    );
  }
}

export default Home;
