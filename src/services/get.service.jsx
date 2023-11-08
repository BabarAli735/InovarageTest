import Axios from './Axios';

const get = (url, params) => {
  let config = {
    params: params,
  };
  console.log('url, config', url, config);
  const onSuccess = ({data}) => {
    return data;
  };

  const onFailure = error => {
    console.log('error===', error);
    console.log('params===', params);
    throw error;
  };

  return Axios.get(url, config).then(onSuccess).catch(onFailure);
};

const getService = {
  get,
};

export default getService;
