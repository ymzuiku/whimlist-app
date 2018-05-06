import React, { PureComponent } from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '@blankapp/ui/src/components/RNTouchableOpacity';

import withStyles from '@blankapp/ui/src/withStyles';


const DrawerItemContentView = withStyles('DrawerItemTitle')(RNText);
const DrawerItemTitle = withStyles('DrawerItemTitle')(RNText);
const DrawerItemDetailText = withStyles('DrawerItemDetailText')(RNText);

const propTypes = {
  contentView: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
  title: PropTypes.string,
  titleStyle: RNText.propTypes.style,
  detailText: PropTypes.string,
  detailTextStyle: RNText.propTypes.style,
  selected: PropTypes.bool,
};
const defaultProps = {
  contentView: null,
  title: '',
  titleStyle: null,
  detailText: '',
  detailTextStyle: null,
  selected: false,
};
const mapPropToStyles = [
  'activeOpacity',
];
class DrawerItem extends PureComponent {
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
      titleView = <DrawerItemTitle>{title}</DrawerItemTitle>;
    }
    if (detailText) {
      detailTextView = <DrawerItemDetailText>{title}</DrawerItemDetailText>;
    }

    return (
      <RNTouchableOpacity
        {...restProps}
      >
        <DrawerItemContentView>
          {titleView}
          {detailTextView}
        </DrawerItemContentView>
      </RNTouchableOpacity>
    );
  }
}

DrawerItem.propTypes = propTypes;
DrawerItem.defaultProps = defaultProps;

DrawerItem.ContentView = DrawerItemContentView;
DrawerItem.Title = DrawerItemTitle;
DrawerItem.DetailText = DrawerItemDetailText;

export default withStyles('DrawerItem', mapPropToStyles)(DrawerItem);
