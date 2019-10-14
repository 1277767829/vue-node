export const user =  username=>{
    let reg=/^(\d{3})\d{4}(\d{4})$/;
    let str=username.replace(reg,"$1****$2");
    return str;
  }