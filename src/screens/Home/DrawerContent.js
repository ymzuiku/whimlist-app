import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Divider, FlatList, Title, View, Subtitle } from '@blankapp/ui';
import { IconButton } from '@blankapp/ui-pro';
import { connect } from 'react-redux';
import { Avatar, Drawer } from '../../components';
import NavigationService from '../../navigators/NavigationService';
import { t } from '../../utilities/I18n';

const propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
};
const defaultProps = {
  lists: [],
};

class DrawerContent extends PureComponent {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.renderItem = this.renderItem.bind(this);

    this.stableLists = [
      {
        id: 'today',
        title: t('screens.home.drawerContent.itemListOfToday'),
        routeName: 'HomeListOfToday',
      },
      {
        id: 'upcoming',
        title: t('screens.home.drawerContent.itemListOfUpcoming'),
        routeName: 'HomeListOfUpcoming',
      },
    ];

    const lists = this.props.lists || [];

    this.state = {
      selectedListId: 'today',
      itemSources: [
        ...this.stableLists,
        ...lists.map(list => Object.assign(list, { routeName: `HomeListOfSome-${list.id}` })),
      ],
    };
  }

  renderItem({ item }) {
    const { selectedListId } = this.state;
    const { id: listId, title, routeName } = item;
    return (
      <Drawer.Item
        title={title}
        selected={selectedListId === listId}
        onPress={() => {
          if (selectedListId === listId || !routeName.startsWith('HomeListOf')) {
            this.navigation.navigate('DrawerClose');
          } else {
            this.navigation.navigate(routeName, { taskId: item.id });
            this.setState({
              selectedListId: listId,
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
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            padding: 12,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => NavigationService.navigate('UserProfile')}
          >
            <View
              style={{
                flexDirection: 'row',
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
            </View>
          </TouchableOpacity>
          <IconButton
            iconName="settings"
            iconStyle={{
              padding: 0,
            }}
            onPress={() => NavigationService.navigate('Settings')}
          />
        </View>
        <FlatList
          data={this.state.itemSources}
          renderItem={this.renderItem}
        />
        <View>
          <Divider />
          <Drawer.Item
            title={t('screens.home.drawerContent.buttonNewList')}
            onPress={() => NavigationService.navigate('ListNew')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

DrawerContent.propTypes = propTypes;
DrawerContent.defaultProps = defaultProps;

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DrawerContent);

