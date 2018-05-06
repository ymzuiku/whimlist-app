import React, { Component } from 'react';
import { Button, Divider, Screen, SectionList, Text } from '@blankapp/ui';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { ListItem } from '../../components';
import * as auth from '../../redux/actions/auth';
import { sharedApiClient as apiClient } from '../../services';
import { t } from '../../utilities/I18n';

class Settings extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.settings.title'),
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.pressLogout = this.pressLogout.bind(this);

    this.state = {
      sectionsSource: [
        {
          title: 'Section 1',
          data: [
            {
              title: 'Item 1',
            },
            {
              title: 'Item 2',
            },
          ],
        },
        {
          title: 'Section 2',
          data: [
            {
              title: 'Item 1',
            },
            {
              title: 'Item 2',
            },
          ],
        },
        {
          title: null,
          data: [
            {
              customView: (
                <Button
                  text={t('screens.settings.buttonLogout')}
                  onPress={this.pressLogout}
                />
              ),
            },
          ],
        },
      ],
    };
  }

  pressLogout = async () => {
    const { logoutSuccess } = this.props; // eslint-disable-line

    try {
      await apiClient.sendRequest('/account/logout', {
        method: 'POST',
      });
    } catch (error) {
      alert(error.message);
    } finally {
      logoutSuccess();

      this.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      }));
    }
  }

  renderSectionHeader({ section }) {
    const { title } = section;
    return (
      <Text
        style={{
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        {title}
      </Text>
    );
  }

  renderItem({ item }) {
    const {
      customView,
      title,
      detailText,
      onPress,
    } = item;
    if (customView) {
      return customView;
    }
    return (
      <ListItem
        title={title}
        detailText={detailText}
        onPress={() => {
          if (onPress) {
            onPress(item);
          }
        }}
      />
    );
  }

  render() {
    return (
      <Screen>
        <SectionList
          sections={this.state.sectionsSource}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={this.renderListFooter}
        />
      </Screen>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  logoutSuccess: () => {
    dispatch(auth.logoutSuccess());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
