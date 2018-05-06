import {
  transparent,
  textPrimary,
  textSecondary,
} from '@blankapp/ui/src/resources/themes/default/colors';
import { fontSizeTitle, fontSizeSubheading } from '@blankapp/ui/src/resources/themes/default/dimens';

export default {
  ListEmptyIndicator: {
    flex: 1,
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListEmptyIndicatorTitle: {
    backgroundColor: 'transparent',
    color: textPrimary,
    fontSize: fontSizeTitle,
    fontWeight: '500',
    marginBottom: 4,
  },
  ListEmptyIndicatorMessage: {
    color: textSecondary,
    backgroundColor: transparent,
    fontSize: fontSizeSubheading,
    marginBottom: 2,
  },
};
