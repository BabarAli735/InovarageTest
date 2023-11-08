import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon, {Icons} from './icons';
import {COLORS, SCREENS, STYLES} from '../constants/theme';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsive_functions';
import {useNavigation} from '@react-navigation/native';

export default function SearchBar({home,onChangeText}) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.search}
        onPress={() => {
          if (!home) return;
          navigation.navigate(SCREENS.SearchScreen);
        }}>
        <TextInput style={styles.textInput} editable={home ? false : true} 
        placeholder='Search'
        placeholderTextColor={COLORS.BLACK}
        onChangeText={onChangeText}
        />
        <Icon
          name={'search'}
          type={Icons.Feather}
          style={styles.icon}
          size={rf(3)}
          color={COLORS.BLACK}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    paddingHorizontal: wp(2),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: COLORS.BLACK,
    fontSize: rf(2),
    fontWeight: '500',
    flex:1
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    borderWidth: wp(0.2),
    borderColor: COLORS.BLACK,
    borderRadius: wp(1.5),
  },
});
