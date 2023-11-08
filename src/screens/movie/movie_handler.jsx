import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CONSTANTS} from '../../constants/theme';
import getServices from '../../services/get.service';
import { API_KEY } from '../../../keys';
import utils from '../../utils';

export default function MovieHandler(props) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    getMovieDetail(props.route?.params?.id);
  }, []);
  const getMovieDetail = async id => {
    try {
      const responce = await getServices.get(
        `${CONSTANTS.API_URLS.GET_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`,
        {},
      );
        setMovieData(responce);
    //   console.log('responce=====', responce);
    } catch (error) {
        const err = utils.showResponseError(error);
        utils.errorAlert('', err?.status_message);

    }
  };

  return {movieData};
}

const styles = StyleSheet.create({});
