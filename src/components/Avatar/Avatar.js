import React, { PureComponent } from 'react';
import { Image as RNImage } from 'react-native';

import withStyles from '@blankapp/ui/src/withStyles';

class Avatar extends PureComponent {
  render() {
    const {
      ...restProps
    } = this.props;
    let { source } = this.props;

    if (source && !source.uri) {
      source = null;
    }

    return (
      <RNImage
        {...restProps}
        source={source}
      />
    );
  }
}

export default withStyles('Avatar')(Avatar);
