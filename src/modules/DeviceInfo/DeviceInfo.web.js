// import RNDeviceInfo from 'react-native-device-info';

const DeviceInfo = {
  // ...RNDeviceInfo,
  getDeviceLocale: () => navigator.language,
};

export default DeviceInfo;
