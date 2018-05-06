import {
  transparent,
  textPrimary,
  textSecondary,
} from '@blankapp/ui/src/resources/themes/default/colors';

export default {
  Drawer: {
  },
  DrawerItem: {
    backgroundColor: transparent,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'DrawerItem[selected=true]': {
    backgroundColor: '#F5F5F5',
  },
  DrawerItemTitle: {
    backgroundColor: 'transparent',
    color: textPrimary,
    fontSize: 15,
    fontWeight: '500',
  },
  DrawerItemDetailText: {
    color: textSecondary,
    backgroundColor: transparent,
    fontSize: 12,
    marginTop: 4,
    marginBottom: 2,
  },
};
