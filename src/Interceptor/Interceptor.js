import axios from 'axios';

const base='https://reqres.in';
export const get = (url) => {
    console.log('interceptor');
    return (
      axios.get(base+url)
        .then((response) => {
         return(response);
        })
        .catch((error) => {
            return(error);
        })
    )
  };
  export const post = (url,data) => {
    return (
      axios.post(base+url,data)
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
    
      })
    );
  };
  export const delet = (url)=>{
    return(
      axios.delete(base+url)
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
    
      })
    );
  }