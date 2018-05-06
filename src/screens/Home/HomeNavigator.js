import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import DrawerContent from './DrawerContent';
import stackConfig from './stackConfig';

import ListOfSome from '../ListOfSome';
import ListOfToday from '../ListOfToday';
import ListOfUpcoming from '../ListOfUpcoming';

// const HomeListOfSome = StackNavigator({
//   HomeListOfSome: {
//     screen: ListOfSome,
//   },
// }, stackConfig);
const HomeListOfToday = StackNavigator({
  HomeListOfToday: {
    screen: ListOfToday,
  },
}, stackConfig);
const HomeListOfUpcoming = StackNavigator({
  HomeListOfUpcoming: {
    screen: ListOfUpcoming,
  },
}, stackConfig);

const HomeNavigator = (lists = []) => {
  const routeConfigMap = {
    HomeListOfToday: {
      screen: HomeListOfToday,
    },
    HomeListOfUpcoming: {
      screen: HomeListOfUpcoming,
    },
  };
  lists.forEach((list) => {
    const routeName = `HomeListOfSome-${list.id}`;
    routeConfigMap[routeName] = {
      screen: StackNavigator({
        [routeName]: {
          screen: ListOfSome,
        },
      }, stackConfig),
    };
  });
  const drawerConfig = {
    initialRouteName: 'HomeListOfToday',
    contentComponent: props => (<DrawerContent {...props} lists={lists} />),
  };
  return DrawerNavigator(routeConfigMap, drawerConfig);
};

export default HomeNavigator;
