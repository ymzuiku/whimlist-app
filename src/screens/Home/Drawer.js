import React, { PureComponent } from 'react';
import { Text, View, HyperlinkButton } from '@blankapp/ui';

import NavigationService from '../../navigators/NavigationService';

class Drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  render() {
    return (
      <View>
        <Text>DrawerMenu</Text>
        <HyperlinkButton
          text="Settings"
          onPress={() => NavigationService.navigate('Settings')}
        />
        <HyperlinkButton
          text="List Of Today"
          onPress={() => this.navigation.navigate('ListOfToday')}
        />
        <HyperlinkButton
          text="List Of Upcoming"
          onPress={() => this.navigation.navigate('ListOfUpcoming')}
        />
        <HyperlinkButton
          text="List Of Some"
          onPress={() => this.navigation.navigate('ListOfSome')}
        />
      </View>
    );
  }
}

export default Drawer;
