import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import getServices from '../../services/get.service';
import {CONSTANTS} from '../../constants/theme';
import {API_KEY} from '../../../keys';
import utils from '../../utils';

export default function HomeHandler() {
  const [isLoading, setIsloading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    try {
        setIsloading(true)
      const responce = await getServices.get(
        `${CONSTANTS.API_URLS.GET_ALL_MOVIES}?api_key=${API_KEY}`,
        {},
      );
      setMoviesData(responce?.results);
      setIsloading(false)

    } catch (error) {
      const err = utils.showResponseError(error);
      utils.errorAlert('', err?.status_message);
    }
  };
  return {
    moviesData,
    isLoading
  };
}

const styles = StyleSheet.create({});
