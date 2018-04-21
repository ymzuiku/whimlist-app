import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('WhimList', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('WhimList', {
    rootTag: document.getElementById('root'),
  });
}
