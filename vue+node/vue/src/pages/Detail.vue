<template>
  <div>
    <header>
        <div class="head-m">
            <img src="../assets/img/order.jpg" alt="">
        </div>
        <div class="head-b margin">
            <a class="logo" href=""><img src="../assets/img/logo.gif" alt=""></a>
            <div class="seach">
                <div class="sou">
                    <input type="text" class="txt" placeholder="邮政919，疯狂一整夏 疯抢一亿购物津贴">
                    <input type="submit" class="sub" value="">
                </div>
                <div class="jingzhun">
                    <a class="te" href="">精准扶贫</a>
                    <a class="te" href="">中国集邮</a>
                    <a href="">新鲜水果</a>
                    <a href="">奶粉</a>
                    <a href="">潮流女鞋</a>
                    <a href="">洗发护发</a>
                    <a href="">剃须刀</a>
                    <a href="">坚果炒货</a>
                    <a href="">纸巾</a>
                </div>
            </div>
            <div class="car">
                <router-link to="/car" ><img src="../assets/img/car.png" alt=""><span>购物车</span></router-link>
                <span>|</span>
                <i v-if="!$store.state.user.err" id="carNumber">{{$store.state.user.data.num}}</i>
                <i v-if="$store.state.user.err" id="carNumber">0</i>
                <img src="../assets/img/xiajian.png" alt="">
            </div>
        </div>
    </header>
    <div id="banner">
        <img src="../assets/img/deta.png" alt="">
    </div>
    <main>
        <div class="margin">
            <div class="details">
                <div class="left">
                    <div id="smallimg" class="smallimg">
                        <img :src="server.baseUrl+src" alt="">
                        <div id="move" class="move"></div>
                        <div id="bigimg" class="bigimg"></div>
                    </div>
                    <ul id="wrap">
                        <li @click="replace(value)" v-for="(value,index) in $store.state.detail.url" :key="index"><img :src="server.baseUrl+value" alt=""></li>
                    </ul>
                </div>
                <div id="right" class="right">
                    <h3>{{$store.state.detail.tip}}</h3>
                    <p><span>特卖价</span><i>￥{{$store.state.detail.price1}}</i><b>{{$store.state.detail.price2}}.00</b></p>
                    <div class="num"><span>数量</span><input v-model="num" type="number" value="1"></div>
                    <div class="add"><router-link to="/column">继续选购</router-link><i @click="add">加入购物车</i></div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>
<script>
import * as types from '../store/type'
export default {
  props:["id"],
  data(){
    return {
      src:"",
      num:1
    }
  },
  methods:{
    replace(src){
      this.src=src;
    },
    add(){
      
      if(this.$store.state.user.err){
        this.$router.push('/login')
      }else{
        this.$store.dispatch(types.UPDATE_CARADD,{num:this.num,goodsid:this.id})
      }
    }
  },
  mounted(){
    this.$store.dispatch(types.UPDATE_DETAIL,this.id).then(res=>this.src=res.url[0]);
    // 这里不能直接获取到state中的detail的数据，因为数据的异步加载
    // console.log(this.$store.state.detail,this.$store.state,1)
    // 利用$route来进行数据的传递
    // let goodid=this.$route.params.id;
    // 也可以用路由间传参的方式来进行
    // let goodid=this.id;
    // axios({
    //   url:"/json/details.json"
    // }).then(res=>{
    //   for(let i=0;i<res.data.length;i++){
    //     if(goodid==res.data[i].goodsid){
    //       this.detail=res.data[i];
    //     }
    //   }
    // })
  }
}
</script>>


<style scoped>
.margin{width:1200px;margin:0 auto}
header{position: relative;}
header .head-m img{width:100%;}
header .head-b{height:100px;display:flex;justify-content:space-between;}
header .head-b .seach{padding-top:20px;}
header .head-b .seach .sou{height:36px;}
header .head-b .seach .sou .txt{float:left;padding:0 5px;border:3px solid #c7181d;width:460px;height:30px;}
header .head-b .seach .sou .sub{float:left;width:73px;height:36px;border:0;background:#c7181d url(../assets/img/seach.png) no-repeat center;cursor: pointer;}
header .head-b .seach .jingzhun{margin-top:5px;}
header .head-b .seach .jingzhun a{display:inline-block;font:12px/1 "微软雅黑";color:#666; margin-left:3px;}
header .head-b .seach .jingzhun a.te{color:#c51010;}
header .head-b .car{margin-top:20px;height:34px;width:158px;border:1px solid #666;padding:0 5px;}
header .head-b .car span{display:inline-block;font:12px/34px "微软雅黑";color:#666;cursor: pointer;margin-left:6px;}
header .head-b .car i{color:#c7181d;font:16px/34px "微软雅黑";display: inline-block;text-align: center;width:58px;}
#banner img{width:100%;}
main {margin-top:50px;}
main .details{border:3px solid #ed7d9e;padding:10px 50px 10px 10px;height:580px;}
main .details .left{float: left;}
main .details .left .smallimg{width:400px;height:400px;position: relative;background-size:400px 400px;}
main .details .left .smallimg img{width:400px;height:400px}
main .details .left .smallimg .move{width:100px;height:100px;background:rgba(0,0,0,.4);position: absolute;left:0;top:0;display:none;}
main .details .left .smallimg .bigimg{width:200px;height:200px;position: absolute;left:400px;top:80px;background-size:800px 800px;display:none;}
main .details .left ul{margin:50px 0;display:flex;}
main .details .left ul li{margin-right:30px;border:1px solid #000;width:62px;height:62px;cursor: pointer;}
main .details .left ul li img{width:100%;height:100%;}
main .details .right{float: right;}
main .details .right h3{font-size: 20px;color: #333;line-height: 22px;margin-top: 30px;}
main .details .right p{margin:50px 100px;}
main .details .right p span{display:inline-block; font:16px/22px "微软雅黑";color:#666;}
main .details .right p i{display:inline-block;font:16px/22px "微软雅黑";color:#c7181d;margin:0 20px;}
main .details .right p b{display:inline-block;font:12px/22px "微软雅黑";text-decoration: line-through;color:#999;}
main .details .right .num{margin:50px 100px;}
main .details .right .num span{display: inline-block;font:16px/22px "微软雅黑";color:#666;}
main .details .right .num input{margin:0 20px;border:1px solid #999;width:60px;}
main .details .right .add{margin:50px 100px;}
main .details .right .add a{display:inline-block;width:140px;height:50px;background:#ed7d9e;color:#fff;text-align: center;font:20px/50px "微软雅黑";margin-right:30px;} 
main .details .right .add i{display:inline-block;width:140px;height:50px;background:#ed7d9e;color:#fff;text-align: center;font:20px/50px "微软雅黑";margin-right:30px;cursor: pointer;}
</style>