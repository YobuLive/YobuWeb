import axios from 'axios';

// @ts-ignore
const configBaseApiURL: string = CONFIG_BASE_API_URL;

const axiosAPI = axios.create({
  baseURL: configBaseApiURL,
});

const apiRequest = (method, url, request) => {
  const headers = {
    authorization: '',
  };

  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest('get', url, request);

const del = (url, request) => apiRequest('delete', url, request);

const post = (url, request) => apiRequest('post', url, request);

const put = (url, request) => apiRequest('put', url, request);

const patch = (url, request) => apiRequest('patch', url, request);

const API = {
  get,
  del,
  post,
  put,
  patch,
};
export default API;
