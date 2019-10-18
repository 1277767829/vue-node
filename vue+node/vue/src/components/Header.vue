<template>
    <header>
        <div class="head-t">
            <div class="margin">
                <div class="head-t-l">
                    <img src="../assets/img/house.png" alt="">
                    <router-link to="/home">邮乐首页</router-link>
                    <a class="dizhi" href="">上海</a>
                </div>
                <div class="head-t-r">
                    <a href="">您好，欢迎来到邮乐网！</a>
                    <router-link class="te" v-if="$store.state.user.err" to="/Login" >登录</router-link>
                    <router-link class="te" v-if="$store.state.user.err" to="/Reg" >注册</router-link>
                    <a v-if="!$store.state.user.err" href="javescript:;"><img class="cur" :src="server.baseUrl+$store.state.user.data.icon" alt=""></a>
                    <a class="te" v-if="!$store.state.user.err" href="javescript:;">{{$store.state.user.data.username|user}}</a>
                    <a class="te" v-if="!$store.state.user.err" @click="out" href="javescript:;">退出</a>
                    <span>|</span>
                    <a href="">我的邮乐<img src="../assets/img/xiajian.png" alt=""></a>
                    <span>|</span>
                    <img src="../assets/img/shouji.png" alt="">
                    <a href="">手机邮乐<img src="../assets/img/xiajian.png" alt=""></a>
                    <span>|</span>
                    <img src="../assets/img/all.png" alt="">
                    <a href="">全部商品分类<img src="../assets/img/xiajian.png" alt=""></a>
                    <span>|</span>
                    <a class="te"  @click.self="replace">网站地图<Map v-if="map"></Map></a>
                    <span>|</span>
                    <a href="">帮助中心<img src="../assets/img/xiajian.png" alt=""></a>
                    <span>|</span>
                    <img src="../assets/img/phone.png" alt="">
                    <i>11185</i>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import Map from './map';
export default {
    data(){
        return {
            map:false
        }
    },
    components:{
        Map
    },
    methods:{
        replace(){
            this.map=!this.map;
        },
        out(){
            this.$store.dispatch("UPDATE_LOGINOUT").then(res=>{
                // console.log(res+5)
                if(res&&this.$route.path=="/car"){
                    this.$router.push("/home")
                }
            })
            // axios({
            //     url:"/api/logout",
            //     // url:"http://localhost:3000/api/logout",
            //     method:"delete"
            // }).then(res=>{
            //     if(res.data.err==0){
            //         this.a=0;
            //     }
            // })
        }
    }
}
</script>>
<style scoped>
header{position: relative;}
.margin{width:1200px;margin:0 auto}
.head-t{height:29px;background:#f7f7f7;padding-top:6px;border-bottom:1px solid #ededed;}
.head-t .head-t-l{float:left;}
.head-t .head-t-l .souye{margin:0 5px;font:12px/22px "微软雅黑";color:#666;}
.head-t .head-t-l .dizhi{display:inline-block;margin-left:5px;background:#fff url(../assets/img/xiajian.png) no-repeat 55px 7px;font:12px/22px "微软雅黑";color:#666;border:1px solid #666;padding-left:12px;width:60px;}
.head-t .head-t-r{float:right;}
.head-t .head-t-r a{display:inline-block;font:12px/22px "微软雅黑";color:#666;}
.head-t .head-t-r a img.cur{width:20px;height:20px;border-radius: 50%;}
.head-t .head-t-r a.te{color:#06c;margin:0 3px;position:relative;cursor: pointer;}
.head-t .head-t-r span{margin:0 5px;color:#666;}
.head-t .head-t-r i{display:inline-block;color:#cc4545;font:14px/22px "微软雅黑";}
</style>