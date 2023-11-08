import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import getServices from '../../services/get.service';
import {CONSTANTS} from '../../constants/theme';
import {API_KEY} from '../../../keys';
import utils from '../../utils';

export default function SearchHandler() {
  const [searchTimer, setSearchTimer] = useState(null);
  const [moviesData, setMoviesData] = useState([]);

  const searchText = e => {
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    setSearchTimer(
      setTimeout(() => {
        getSearch(e);
      }, 1000),
    );
  };

  const getSearch = async txt => {
    try {
      const responce = await getServices.get(
        `${CONSTANTS.API_URLS.SEARCH_MOVIE}?query=${txt}&api_key=${API_KEY}`,
        {},
      );
      //   console.log('rresponce===',responce);
      setMoviesData(responce?.results);
    } catch (error) {
      const err = utils.showResponseError(error);
      utils.errorAlert('', err?.status_message);
    }
  };
  return {
    searchText,
    moviesData,
  };
}

const styles = StyleSheet.create({});
