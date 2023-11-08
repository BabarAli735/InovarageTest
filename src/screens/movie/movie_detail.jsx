import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsive_functions';
import {COLORS, CONSTANTS, STYLES} from '../../constants/theme';
import MovieHandler from './movie_handler';
import BackArrow from '../../components/back_arrow';

export default function MovieDetailScreen(props) {
  const {movieData} = MovieHandler(props);
  return (
    <View style={styles.container}>
        <BackArrow />
      <Image
        style={styles.image}
        source={{
          uri: `${CONSTANTS.API_URLS.IMAGE_URL}${movieData?.poster_path}`,
        }}
      />
      <Text style={styles.title}>{movieData?.original_title}</Text>
      <Text style={styles.description}>{movieData?.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  image: {
    height: hp(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: rf(2.5),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  description:{
    fontSize: rf(1.5),
    color: COLORS.BLACK,
    fontWeight: '500',
    marginTop:hp(1.5)
  }
});
