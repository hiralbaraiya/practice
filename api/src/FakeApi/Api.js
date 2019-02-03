import { get, post, delet, put } from '../Interceptor/Interceptor';

export const getUser = (halfurl) => {
  let url = `/api/users${halfurl}`;
  return (get(url));
};
export const updateValues = (data) => {
  let url = '/api/users';
  if (data.avatar) {
    return (put(url, data));
  }
  return (post(url, data));
};
export const deletuser = () => {
  let url = '/api/users/2';
  return (delet(url));
};