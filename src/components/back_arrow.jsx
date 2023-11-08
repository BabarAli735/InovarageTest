import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';
import Icon, {Icons} from './icons';
import {useNavigation} from '@react-navigation/native';
import { responsiveFontSize as rf ,widthPercentageToDP as wp} from '../common/responsive_functions';
export default function BackArrow() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.8}
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon
        name={'left'}
        type={Icons.AntDesign}
        color={COLORS.BLACK}
        size={rf(3)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:wp(2)
  },
});
