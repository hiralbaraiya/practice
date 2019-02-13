export const Submit=(props)=>{
    let val;
    Object.keys(props).map(function (keyName) {
        if (keyName === 'subject') {
          if (props[keyName].length === 0) {
            val = false;
          }
        }
        else {
          if (props[keyName] === '' || props[keyName] === null) {
            val = false;
          }
        }
      })
        if (val === false) {
          return false;
        }
        else {
          if (props.validpass === false) {
            return false;
          }
          else {
            return true;
          }
        }
}