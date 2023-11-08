import {Dimensions, Platform, StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../common/responsive_functions';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

export const {width, height} = Dimensions.get('window');

/* *************** Colors ********** */
export const COLORS = {
  // base colors
  primary: '#4CBDBD',
  // primary: "#69B4F5",
  secondary: '#9ECB4C',

  // normal colors
  black: '#1a1a1a',
  BLACK: '#1a1a1a',
  blue: '#3AA0FF',

  grey: '#A59A97',
  brownGrey: '#3a3d46',
  brown: '#AAB2B7',
  facebook: '#0037c1',
  apple: '#262a34',
  google: '#1d6ec2',
  golden: '#FDBF00',
  // gradients
  gradient: ['#20242b', '#3a3d46'],

  // colors
  crimson: '#860012',
  blackWithOpacity: 'rgba(0, 0, 0, .2)',
  white: '#f2f2f2',
  whiteOpacity: '#FFFFFF80',
  LightwhiteOpacity: '#FFFFFF10',
  red: '#FF0000',
  greyish: '#202020',
  transparent: 'transparent',
  modal: '#1a1a1a',
  lightPurpal: '#f8e1fe',
  green: '#2aa058',
  darkGray: '#8F8F8F',
};

const appTheme = {COLORS};
export default appTheme;

/* * Fonts * */

/* * Images * */
export const IMAGES = {};

/* * Screens * */
export const SCREENS = {

  /* * Screens  * */
  Home: 'Home',
  MovieDetail: 'MovieDetail',
  SearchScreen: 'SearchScreen',
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  line: {
    height: hp(0.15),
    backgroundColor: COLORS.grey,
  },
});

/* * Api Path * */

export const CONSTANTS = {
  

  API_URLS: {
    BASE_URL:'https://api.themoviedb.org/', 
    IMAGE_URL:'https://image.tmdb.org/t/p/w500',

    // movies
    GET_ALL_MOVIES: '3/discover/movie',
    GET_MOVIE_DETAIL: '3/movie',
    SEARCH_MOVIE: '3/search/movie',
  
  },

  /* * FirebaseConstants * */
  FIREBASE: {
    CHAT: 'Chat',
    MESSAGES: 'messages',
    USERS: 'Users',
    CHATHEADS: 'ChatHeads',
    READ: 'read',
    TOKEN: 'Tokens',
    FCM: 'https://fcm.googleapis.com/fcm/send',
    SINGLE: 'SINGLE',
  },

  DESTINATIONS: {
    SIGN_UP: 'sign_up',
    FORGOT_PASSWORD: 'forgot_password',
  },

  CACHE_KEYS: {
    ACCESS_TOKEN: 'access_token',
    IS_FIRST_TIME: 'is_first_time',
  },
};

export const FIREBASELABELS = {};
