import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Theme, { ThemeProvider } from '@blankapp/ui';
import defaultTheme from '@blankapp/ui/src/resources/themes/default';
import defaultThemePro from '@blankapp/ui-pro/src/resources/themes/default';
import defaultThemeExtend from './resources/themes/default';
import AppNavigator from './navigators/AppNavigator';
import NavigationService from './navigators/NavigationService';
import configuredStore from './redux/store';

Theme.registerTheme('default', [
  defaultTheme,
  defaultThemePro,
  defaultThemeExtend,
]);

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  render() {
    const { store, persistor } = configuredStore;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <AppNavigator
              ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
