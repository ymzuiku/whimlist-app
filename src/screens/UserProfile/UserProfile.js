import React, { Component } from 'react';
import { Screen, Text } from '@blankapp/ui';
import { AppBar } from '@blankapp/ui-pro';
import NavigationService from '../../navigators/NavigationService';
import { t } from '../../utilities/I18n';

class UserProfile extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.userProfile.title'),
      headerRight: (
        <AppBar.IconButton
          iconName="edit"
          onPress={() => NavigationService.navigate('UserProfileEdit')}
        />
      ),
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
        <Text>UserProfile</Text>
      </Screen>
    );
  }
}

export default UserProfile;
