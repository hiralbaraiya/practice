import axios from 'axios';

export const getUser = (page) => {
    return (
      axios.get('https://reqres.in/api/users?page='+page)
        .then((response) => {
          return response;
        })
        .catch((error) => {
  
          console.log(error);
          return error;
        })
    )
  };
  export const updateValues = (data) => {
    return (
      axios.post('https://reqres.in/api/users',data)
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
    
      })
    );
  };
  export const deletuser=()=>{
    return(
      axios.delete("https://reqres.in/api/users/2")
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
    
      })
    );
  }