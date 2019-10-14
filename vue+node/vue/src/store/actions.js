import * as types from './type';

export default {
  //对象中的K值用方括号括起来表示可以外部定义的同名变量来代替
    [types.UPDATE_BANNER]:({state,commit},payload)=>{
      axios({
        url:'/api/banner',
        params:{_limit:8}
      }).then(
        res=>commit(types.UPDATE_BANNER,res.data.data)
      )
    },
    [types.UPDATE_COLUMN]:({state,commit},payload)=>{
      axios({
        url:'/api/column',
        params:{_limit:10}
      }).then(
        res=>commit(types.UPDATE_COLUMN,res.data.data)
      )
    },
    [types.UPDATE_DETAIL]:({state,commit},payload)=>{
    return  axios({
        url:'/api/detail',
        params:{_limit:1,_id:payload}
      }).then(
        res=>{
          commit(types.UPDATE_DETAIL,res.data.data);
          return res.data.data;
        }
      )
    },
    [types.UPDATE_LOGINOUT]:({state,commit},payload)=>{
      axios({
        url:'/api/carchange',
        params:{_id:state.user.data._id,goods:state.user.data.goods,num:state.user.data.num}
      }).then(
        // res=>console.log(res.data)
      );
      return  axios({
          url:'/api/logout',
          method:"delete"
        }).then(
          res=>{
            if(res.data.err){
              commit(types.CHECK_USER,res.data)
              localStorage.removeItem('user')
              return res.data.err
            }
            
          }
        )
    },
    [types.CHECK_USER]:({state,commit},{username,password,save})=>{
      return axios({
        url:'/api/login',
        method:'post',
        data:{
          username,password,
          save
        }
      }).then(
        res=>{
          if(!res.data.err){
            let data=res.data;
            if(res.data.data.goods){
              let arr=[];
              data.data.goods.forEach(item=>{
                arr.push(JSON.parse(item))
              });
              data.data.goods=arr;
            }
            commit(types.CHECK_USER,data);
            localStorage.setItem('user',JSON.stringify(data));
        }
          return {
            mess:res.data.msg,
            err:res.data.err
          }
        }
      )
    },
    [types.UPDATE_CARADD]:({state,commit},{num,goodsid})=>{
      let obj={...state.user}
      let find=false;
      obj.data.num=1*obj.data.num+1*num;
      if(obj.data.goods){
        obj.data.goods.forEach((item,index)=>{
          if(item.goodsid==goodsid){
            item.num=item.num*1+1*num;
            find=true;
          }
        });
        if(!find){
          obj.data.goods.push({checked:true,num,...state.detail});
        }
      }else{
        obj.data.goods.push({checked:true,num,...state.detail});
      }
      localStorage.setItem('user',JSON.stringify(obj));
      commit(types.CHECK_USER,obj);
    },
    [types.UPDATE_CARCHANGE]:({state,commit},{num,id})=>{
      let obj={...state.user}
      obj.data.goods.forEach((item,index)=>{
        if(item._id==id){
          item.num=item.num*1+1*num;
          if(item.num<0){
            item.num=0;
            return;
          }
          obj.data.num=1*obj.data.num+1*num;
          localStorage.setItem('user',JSON.stringify(obj));
          commit(types.CHECK_USER,obj);
        }
      })
    },
    [types.UPDATE_CARREMOVE]:({state,commit},{num,id})=>{
      let obj={...state.user}
      obj.data.goods.forEach((item,index)=>{
        if(item._id==id){
        obj.data.goods.splice(index,1);
        obj.data.num-=num;
        localStorage.setItem('user',JSON.stringify(obj));
        commit(types.CHECK_USER,obj);
        }
      })
    },
    [types.UPDATE_CARCHECKED]:({state,commit},{id,checked})=>{
      let obj={...state.user}
      obj.data.goods.forEach((item,index)=>{
        if(item._id==id){
        item.checked=checked;
        localStorage.setItem('user',JSON.stringify(obj));
        commit(types.CHECK_USER,obj);
        }
      })
    },
    [types.UPDATE_CARALLCHECKED]:({state,commit},payload)=>{
      let obj={...state.user}
      obj.data.goods.forEach((item,index)=>{
        item.checked=payload;
        localStorage.setItem('user',JSON.stringify(obj));
        commit(types.CHECK_USER,obj);
      })
    }
  }