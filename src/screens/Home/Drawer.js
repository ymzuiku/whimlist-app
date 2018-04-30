import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Divider, FlatList, HyperlinkButton, Title, View, Subtitle } from '@blankapp/ui';
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
    const { auth } = this.props; // eslint-disable-line

    const {
      email,
      name,
      avatar_url: avatarUrl,
    } = auth.user;

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
                marginLeft: 12,
              }}
            >
              <Title>{name || email}</Title>
              <Subtitle>Comming soon</Subtitle>
            </View>
          </View>
        </TouchableOpacity>
        <FlatList
          data={this.state.itemSources}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <Divider />}
        />
        <HyperlinkButton
          text="Settings"
          onPress={() => NavigationService.navigate('Settings')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Drawer);

