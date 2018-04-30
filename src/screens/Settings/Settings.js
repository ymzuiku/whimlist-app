import React, { Component } from 'react';
import { Divider, Screen, SectionList, Text } from '@blankapp/ui';
import { connect } from 'react-redux';
import { ListItem } from '../../components';
import * as auth from '../../redux/actions/auth';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
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
              title: 'Logout',
              onPress: this.pressLogout,
            },
          ],
        },
      ],
    };
  }

  pressLogout() {
    const { handleLogout } = this.props; // eslint-disable-line

    handleLogout();
  }

  renderSectionHeader({ section }) {
    const { title } = section;
    if (!title) {
      return null;
    }
    return (
      <Text
        style={{
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 12,
          paddingBottom: 6,
        }}
      >
        {title}
      </Text>
    );
  }

  renderItem({ item }) {
    const { title, detailText, onPress } = item;
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
  handleLogout: async () => {
    dispatch(await auth.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
