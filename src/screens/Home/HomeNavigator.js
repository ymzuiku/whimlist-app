import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Drawer from './Drawer';

import Example from '../Example';
import ListOfSome from './ListOfSome';
import ListOfToday from './ListOfToday';
import ListOfUpcoming from './ListOfUpcoming';

const routeConfigMap = {
  Example: {
    screen: Example,
  },
  ListOfSome: {
    screen: ListOfSome,
  },
  ListOfToday: {
    screen: ListOfToday,
  },
  ListOfUpcoming: {
    screen: ListOfUpcoming,
  },
};
const drawerConfig = {
  initialRouteName: 'ListOfToday',
  contentComponent: props => (<Drawer {...props} />),
};

const HomeNavigator = DrawerNavigator(routeConfigMap, drawerConfig);

export default HomeNavigator;
