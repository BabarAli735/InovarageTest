import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HomeHandler from './home_handler';
import {COLORS, STYLES} from '../../constants/theme';
import MovieCard from '../../components/movie_card';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../common/responsive_functions';
import CustomHeader from '../../components/search_bar';
import SearchBar from '../../components/search_bar';
export default function HomeScreen() {
  const {moviesData, isLoading} = HomeHandler();
  return (
    <View style={STYLES.container}>
      <SearchBar home />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={COLORS.primary} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={moviesData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
}

const renderItem = ({item}) => {
  return <MovieCard item={item} />;
};
const styles = StyleSheet.create({
  contentContainerStyle: {paddingBottom: hp(2), paddingHorizontal: wp(2)},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
