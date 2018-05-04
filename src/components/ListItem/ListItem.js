import React, { PureComponent } from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '@blankapp/ui/src/components/RNTouchableOpacity';

import withStyles from '@blankapp/ui/src/withStyles';
import ListItemContentView from './ListItemContentView';
import ListItemTitle from './ListItemTitle';
import ListItemDetailText from './ListItemDetailText';

const propTypes = {
  contentView: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
  title: PropTypes.string,
  titleStyle: RNText.propTypes.style,
  detailText: PropTypes.string,
  detailTextStyle: RNText.propTypes.style,
};
const defaultProps = {
  contentView: null,
  title: '',
  titleStyle: null,
  detailText: '',
  detailTextStyle: null,
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

    let {
      contentView, // eslint-disable-line
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
        <ListItemContentView>
          {titleView}
          {detailTextView}
        </ListItemContentView>
      </RNTouchableOpacity>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

ListItem.ContentView = ListItemContentView;
ListItem.Title = ListItemTitle;
ListItem.DetailText = ListItemDetailText;

export default withStyles('ListItem', mapPropToStyles)(ListItem);
