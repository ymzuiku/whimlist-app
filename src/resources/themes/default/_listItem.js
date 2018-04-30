import {
  transparent,
  textPrimary,
  textSecondary,
} from '@blankapp/ui/src/resources/themes/default/colors';
import { fontSizeTitle, fontSizeSubheading } from '@blankapp/ui/src/resources/themes/default/dimens';

export default {
  ListItem: {
    backgroundColor: transparent,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ListItemTitle: {
    backgroundColor: 'transparent',
    color: textPrimary,
    fontSize: fontSizeTitle,
    fontWeight: '500',
    marginBottom: 4,
  },
  ListItemDetailText: {
    color: textSecondary,
    backgroundColor: transparent,
    fontSize: fontSizeSubheading,
    marginBottom: 2,
  },
};
