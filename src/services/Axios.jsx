import axios from 'axios';
import {CONSTANTS} from '../constants/theme';
import {API_KEY} from '../../keys';
const Axios = axios.create({
  baseURL: CONSTANTS.API_URLS.BASE_URL,
 
});

export default Axios;
