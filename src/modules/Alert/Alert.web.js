import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

let instance;

class AlertViewClass extends Component {
  constructor(props) {
    super(props);

    this.handleButtonOnPress = this.handleButtonOnPress.bind(this);

    this.state = {
      visible: false,
      queue: [],
    };
  }

  handleButtonOnPress(onPress) {
    if (onPress) {
      onPress();
    }

    const { queue } = this.state;
    queue.pop();

    this.setState({ visible: false, queue });
    if (queue.length > 0) {
      setTimeout(() => {
        this.setState({ visible: true });
      }, 100);
    }
  }

  render() {
    const { visible, queue } = this.state;
    if (!visible || queue.length === 0) {
      return null;
    }

    const {
      title,
      message,
      buttons,
    } = queue[queue.length - 1];

    let titleView;
    let messageView;
    let buttonsView;

    if (title) {
      titleView = (
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.87)',
            fontSize: 17,
            fontWeight: '600',
          }}
        >
          {title}
        </Text>
      );
    }
    if (message) {
      messageView = (
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.54)',
            marginTop: 4,
            fontSize: 14,
            maxWidth: 300,
          }}
        >
          {message}
        </Text>
      );
    }

    if (buttons) {
      buttonsView = buttons.map((button) => {
        const { text, onPress, style } = button;
        return (
          <TouchableOpacity
            style={{
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
            onPress={() => {
              this.handleButtonOnPress(onPress);
            }}
          >
            <Text
              style={{
                color: style === 'cancel' ? '#db2828' : '#2185d0',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              {text}
            </Text>
          </TouchableOpacity>
        );
      });
    }

    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(0,0,0,0.6)',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            backgroundColor: '#f8f8f8',
            minWidth: 180,
          }}
        >
          <View
            style={{
              padding: 16,
            }}
          >
            {titleView}
            {messageView}
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              paddingLeft: 6,
              paddingRight: 6,
              paddingBottom: 6,
            }}
          >
            {buttonsView}
          </View>
        </View>
      </View>
    );
  }
}

const saveRef = (r) => { instance = r; };

export default {
  IsomorphicView: () => (
    <AlertViewClass ref={saveRef} />
  ),
  alert(title, message, buttons = [{ text: 'OK' }], options) {
    setTimeout(() => {
      const { queue } = instance.state;
      instance.setState({
        visible: true,
        queue: [
          ...queue,
          {
            title,
            message,
            buttons,
            options,
          },
        ],
      });
    });
  },
};
