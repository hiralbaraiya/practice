import { get, post, delet, put } from '../Interceptor/Interceptor';

export const getUser = (url) => {
  return (get(url));
};
export const updateValues = (url,data) => {
  if (url!=='/create') {
    return (put(url, data));
  }
  return (post(url, data));
};
export const deletuser = (url) => {
  return (delet(url));
};