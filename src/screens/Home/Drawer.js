import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Divider, FlatList, Title, View, Subtitle } from '@blankapp/ui';
import { IconButton } from '@blankapp/ui-pro';
import { connect } from 'react-redux';
import { Avatar, ListItem } from '../../components';

import NavigationService from '../../navigators/NavigationService';

class Drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.renderItem = this.renderItem.bind(this);

    this.state = {
      currentRouteName: 'ListOfToday',
      itemSources: [
        {
          title: 'Today',
          routeName: 'ListOfToday',
        },
        {
          title: 'Upcoming',
          routeName: 'ListOfUpcoming',
        },
        {
          title: 'Some',
          routeName: 'ListOfSome',
        },
        {
          title: 'New List',
          routeName: 'ListNew',
        },
      ],
    };
  }

  renderItem({ item }) {
    const { title, routeName } = item;
    return (
      <ListItem
        title={title}
        onPress={() => {
          if (this.state.currentRouteName === routeName) {
            this.navigation.navigate('DrawerClose');
          } else {
            this.navigation.navigate(routeName);
            this.setState({
              currentRouteName: routeName,
            });
          }
        }}
      />
    );
  }

  render() {
    const auth = this.props.auth || { user: {} };
    const user = auth.user || {};

    const {
      email,
      name,
      avatar_url: avatarUrl,
    } = user;

    return (
      <View>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('UserProfile')}
        >
          <View
            style={{
              flexDirection: 'row',
              padding: 12,
            }}
          >
            <Avatar
              source={{ uri: avatarUrl }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 10,
              }}
            >
              <Title>{name || 'N/A'}</Title>
              <Subtitle>{email}</Subtitle>
            </View>
            <IconButton
              iconName="settings"
              iconStyle={{
                padding: 0,
              }}
              onPress={() => NavigationService.navigate('Settings')}
            />
          </View>
        </TouchableOpacity>
        <FlatList
          data={this.state.itemSources}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Drawer);

