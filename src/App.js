import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Theme, { ThemeProvider } from '@blankapp/ui';
import defaultTheme from '@blankapp/ui/src/resources/themes/default';
import defaultThemePro from '@blankapp/ui-pro/src/resources/themes/default';
import AppNavigator from './navigators/AppNavigator';
import NavigationService from './navigators/NavigationService';

Theme.registerTheme('default', [
  defaultTheme,
  defaultThemePro,
]);

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <ThemeProvider>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
