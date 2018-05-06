import React, { Component } from 'react';
import { sharedApiClient as apiClient } from '../../services';
import HomeNavigator from './HomeNavigator';
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

    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      await this.loadData();
    });
  }

  async loadData() {
    try {
      const res = await apiClient.sendRequest('/lists');
      const lists = res.data || [];

      this.setState({ lists });
    } catch (error) {
      alert(error.message);
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
