import React, { PureComponent } from 'react';
import { View as RNView, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '@blankapp/ui/src/components/RNTouchableOpacity';

import withStyles from '@blankapp/ui/src/withStyles';
import ListItemTitle from './ListItemTitle';
import ListItemDetailText from './ListItemDetailText';

const propTypes = {
  title: PropTypes.string,
  titleStyle: RNText.propTypes.style,
  detailText: PropTypes.string,
  detailTextStyle: RNText.propTypes.style,
};
const defaultProps = {
  title: '',
  titleStyle: undefined,
  detailText: '',
  detailTextStyle: undefined,
};
const mapPropToStyles = [
  'activeOpacity',
];
class ListItem extends PureComponent {
  render() {
    const {
      title,
      titleStyle,
      detailText,
      detailTextStyle,
      ...restProps
    } = this.props;

    let titleView;
    let detailTextView;
    if (title) {
      titleView = <ListItemTitle>{title}</ListItemTitle>;
    }
    if (detailText) {
      detailTextView = <ListItemDetailText>{title}</ListItemDetailText>;
    }

    return (
      <RNTouchableOpacity
        {...restProps}
      >
        <RNView>
          {titleView}
          {detailTextView}
        </RNView>
      </RNTouchableOpacity>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

ListItem.Title = ListItemTitle;
ListItem.DetailText = ListItemDetailText;

export default withStyles('ListItem', mapPropToStyles)(ListItem);
