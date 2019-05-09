switch (value.length) {
    //   case 1: 
    //   case 2:
    //   case 3:
    //     res = e.target.value.match(re);
    //     if (!res) {
    //       value = value.substring(0, value.length - 1)
    //     }
    //     break;
    //   case 4:
    //     res = value.substring(3, 4).match(re)
    //     if (res) {
    //       value = `(${value.substring(0, 3)}) ${value.substring(3, 4)}`
    //     }
    //     else {
    //       value = `${value.substring(0, 3)}`
    //     }
    //     break;
    //   case 5:
    //   case 6:
    //     re = /^\((\d{3})\)\s(\d{0})/
    //     res = re.test(e.target.value)
    //     console.log(res)
    //     if (res) {
    //       value = `${value.substring(1, 4)}`
    //     } else {
    //       value = this.state.value
    //     }
    //     break;
    //   case 7:
    //     re = /^\((\d{3})\)\s(\d{1})/
    //     res = re.test(e.target.value)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 8:
    //     re = /^\((\d{3})\)\s(\d{2})/
    //     res = re.test(e.target.value)
    //     console.log(res)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 9:
    //     re = /^\((\d{3})\)\s(\d{3})/
    //     res = re.test(e.target.value)
    //     console.log(res)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 10:
    //     re = /^\((\d{3})\)\s(\d{4})$/
    //     res = re.test(e.target.value)
    //     if (res) {
    //       value = `${value.substring(0, 9)}-${value.substring(9, 10)}`
    //     }
    //     else {
    //       re = /^\((\d{3})\)\s(\d{3})-$/
    //       res = re.test(e.target.value)
    //       if (res) {
    //         value = `${value.substring(0, 9)}`
    //       }
    //       else {
    //         value = this.state.value
    //       }

    //     }
    //     break;
    //   case 11:
    //     re = /^\((\d{3})\)\s(\d{3})-(\d{1})/
    //     res = re.test(e.target.value)
    //     console.log(res)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 12:
    //     re = /^\((\d{3})\)\s(\d{3})-(\d{2})/
    //     res = re.test(e.target.value)
    //     console.log(res)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 13:
    //     re = /^\((\d{3})\)\s(\d{3})-(\d{3})/
    //     res = re.test(e.target.value)
    //     console.log(res)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 14:
    //     re = /^\((\d{3})\)\s(\d{3})-(\d{4})/
    //     res = re.test(e.target.value)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     break;
    //   case 15:
    //     value = `${value.substring(0, value.length - 1)}`
      
    // }
     // let last = value.substring(length - 1, length)
    // let re;
    // let res;
    // if (length < 6) {
    //   re = /^(\d)+$/
    //   res = value.match(re)
    //   console.log(res)
    //   if (!res) {
    //     value = value.substring(0, value.length - 1)
    //   }
    //   else {
    //     if (length === 4) {
    //       value = `(${value.substring(0, 3)}) ${value.substring(3, 4)}`
    //     }
    //   }

    // }
    // else {
    //   if (length < 10) {
    //     re = /^\((\d{3})\)\s(\d{0,4})/
    //     res = value.match(re)
    //     if (!res) {
    //       value = this.state.value;
    //     }
    //     else {
    //       if (length === 6) {
    //         value = `${value.substring(1, 4)}`
    //       }
    //     }
    //   }
    //   else {
    //     if (length < 15) {
    //       if (length === 10) {
    //         re = /^\((\d{3})\)\s(\d{4})$/
    //         res = re.test(e.target.value)
    //         if (res) {
    //           value = `${value.substring(0, 9)}-${value.substring(9, 10)}`
    //         }
    //         else {
    //           re = /^\((\d{3})\)\s(\d{3})-$/
    //           res = re.test(e.target.value)
    //           if (res) {
    //             value = `${value.substring(0, 9)}`
    //           }
    //           else {
    //             value = this.state.value
    //           }
    //         }
    //       }
    //       else {
    //         let re = /^\((\d{3})\)\s(\d{3})-(\d{1,4})/
    //         res = value.match(re)
    //         if (!res) {
    //           value = this.state.value;ssss
    //         }h("div", {class: "kdjkgjf"}, "Abc")
    //       }
    //     }
    //     else {
    //       value = `${value.substring(0, value.length - 1)}`
    //     }
    //   }

    // }