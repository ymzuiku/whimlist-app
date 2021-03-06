import { View as RNView } from 'react-native';
// import PropTypes from 'prop-types';

import withStyles from '@blankapp/ui/src/withStyles';
import DrawerItem from './DrawerItem';

const Drawer = withStyles('Drawer')(RNView);

Drawer.Item = DrawerItem;

export default Drawer;
