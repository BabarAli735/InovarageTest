import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../../components/search_bar';
import SearchHandler from './search_handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../common/responsive_functions';
import MovieCard from '../../components/movie_card';

export default function SearchScreen() {
  const {searchText, moviesData} = SearchHandler();
  return (
    <View style={styles.container}>
      <SearchBar onChangeText={searchText} />
      <FlatList
        data={moviesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}
const renderItem = ({item}) => {
  return <MovieCard item={item} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {paddingBottom: hp(2), paddingHorizontal: wp(2)},
});
