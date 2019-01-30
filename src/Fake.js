import axios from 'axios';
import {get,post,delet} from './Interceptor/Interceptor';

export const getUser = (page) => {
    let url='/api/users?page='+page;
    let response=get(url);
    return(response);
  };
  export const updateValues = (data) => {
      let url='api/users';
    return (post(url,data));
  };
  export const deletuser=()=>{
      let url='api/users/2';
    return(delet());
  }