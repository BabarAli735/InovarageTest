import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsive_functions';
import {COLORS, CONSTANTS, SCREENS, STYLES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

function MovieCard({item}) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(SCREENS.MovieDetail, {id: item.id});
  };
  return (
    <TouchableOpacity
      style={[styles.container, STYLES.shadow]}
      onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: `${CONSTANTS.API_URLS.IMAGE_URL}${item?.poster_path}`}}
      />
      <Text numberOfLines={2} style={styles.txt}>
        {item.original_title}
      </Text>
      <View style={STYLES.row}>
      <Text numberOfLines={2} style={styles.txt1}>
        Released on: 
      </Text>
      <Text numberOfLines={2} style={styles.txt1}>
        {` ${item.release_date}`}
      </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: wp(2),
    backgroundColor: COLORS.white,
    borderRadius: wp(2),
    overflow: 'hidden',
    marginTop: hp(2),
    padding: wp(2),
  },
  image: {
    height: hp(20),
    width: wp(43),
    alignSelf: 'center',
    borderRadius: wp(2),
  },
  txt: {
    fontSize: rf(2),
    width: wp(43),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  txt1: {
    fontSize: rf(1.5),
    color: COLORS.BLACK,
    fontWeight: '500',
  },
});

export default memo(MovieCard);
