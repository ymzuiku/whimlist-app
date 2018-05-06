import React, { PureComponent } from 'react';
import { Text as RNText, View as RNView } from 'react-native';
import PropTypes from 'prop-types';

import withStyles from '@blankapp/ui/src/withStyles';

const ListEmptyIndicatorTitle = withStyles('ListEmptyIndicatorTitle')(RNText);
const ListEmptyIndicatorMessage = withStyles('ListEmptyIndicatorMessage')(RNText);

const propTypes = {
  title: PropTypes.string,
  titleStyle: RNText.propTypes.style,
  message: PropTypes.string,
  messageStyle: RNText.propTypes.style,
};
const defaultProps = {
  title: '',
  titleStyle: null,
  message: '',
  messageStyle: null,
};
class ListEmptyIndicator extends PureComponent {
  render() {
    const {
      title,
      titleStyle,
      message,
      messageStyle,
      ...restProps
    } = this.props;

    let titleView;
    let messageView;
    if (title) {
      titleView = <ListEmptyIndicatorTitle>{title}</ListEmptyIndicatorTitle>;
    }
    if (message) {
      messageView = <ListEmptyIndicatorMessage>{message}</ListEmptyIndicatorMessage>;
    }

    return (
      <RNView
        {...restProps}
      >
        {titleView}
        {messageView}
      </RNView>
    );
  }
}

ListEmptyIndicator.propTypes = propTypes;
ListEmptyIndicator.defaultProps = defaultProps;

export default withStyles('ListEmptyIndicator')(ListEmptyIndicator);
