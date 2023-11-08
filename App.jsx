import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MainNavigation from './src/navigation/main_navigation';
import {COLORS} from './src/constants/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from './src/common/responsive_functions';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
function App() {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        text1Style={{
          color: COLORS.BLACK,
          fontSize: rf(2),
        }}
        text2Style={{
          color: COLORS.black,
          fontSize: rf(1.5),
        }}
        style={{backgroundColor: COLORS.primary}}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        text1Style={{
          color: COLORS.black,
          fontSize: rf(2),
        }}
        text2Style={{
          color: COLORS.black,
          fontSize: rf(1.5),
        }}
        style={{backgroundColor: COLORS.red, height: hp('5%')}}
      />
    ),
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <MainNavigation />
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
