import {get,post,delet,put} from '../Interceptor/Interceptor';

export const getUser = (page) => {
    let url=`/api/users?page=${page}`;
    return(get(url)
        .then((response) => {
          console.log(response)
         return(
            response
           
         );
        })
        .catch((error) => {
          console.log(error)
          return(
            Promise.reject(
             error=true,
            ));
        })
        )
  };
  export const updateValues = (data) => {
      let url='/api/users';
      if(data.avatar){
        return (put(url,data));
      }
    return (post(url,data));
  };
  export const deletuser=()=>{
      let url='/api/users/2';
    return(delet(url));
  }