import React from 'react';
import { AppBar } from '@blankapp/ui-pro';

export default {
  navigationOptions: ({ navigation }) => ({
    header: props => <AppBar {...props} />,
    headerLeft: (
      <AppBar.IconButton
        iconName="menu"
        onPress={() => navigation.navigate('DrawerToggle')}
      />
    ),
  }),
};
