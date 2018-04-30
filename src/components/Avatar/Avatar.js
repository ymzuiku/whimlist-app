import React, { PureComponent } from 'react';
import { Image as RNImage } from 'react-native';

import withStyles from '@blankapp/ui/src/withStyles';

class Avatar extends PureComponent {
  render() {
    const {
      ...restProps
    } = this.props;

    return (
      <RNImage
        {...restProps}
      />
    );
  }
}

export default withStyles('Avatar')(Avatar);
