import {
  white,
  transparent,
  textPrimary,
  textSecondary,
} from '@blankapp/ui/src/resources/themes/default/colors';
import { fontSizeTitle, fontSizeSubheading } from '@blankapp/ui/src/resources/themes/default/dimens';

export default {
  ListItem: {
    backgroundColor: white,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ListItemTitle: {
    backgroundColor: 'transparent',
    color: textPrimary,
    fontSize: fontSizeTitle,
    fontWeight: '500',
  },
  ListItemDetailText: {
    color: textSecondary,
    backgroundColor: transparent,
    fontSize: fontSizeSubheading,
    marginTop: 4,
    marginBottom: 2,
  },
};
