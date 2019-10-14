<template>
  <div>
    <header>
      <div class="head-b">
            <a class="logo margin" href=""><img src="../assets/img/logo.gif" alt=""></a>
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
                <img src="../assets/img/car.png" alt="">
                <span>购物车</span>
                <span>|</span>
                <i>0</i>
                <img src="../assets/img/xiajian.png" alt="">
            </div>
        </div>
    </header>
    <main>
        <div class="margin">
            <img src="../assets/img/login.jpg" alt="">
            <div class="login-box">
                <h3>登录</h3>
                <div class="user"><input v-model="usertext" id="user" type="text" placeholder="邮箱地址或手机号码"><span id="userspan"></span></div>
                <div class="pass"><input v-model="passtext" id="pass" type="password" placeholder="密码"><span id="passspan"></span></div>
                <div class="checkbox"><input v-model="checktext" id="checkbox" type="checkbox"><label for="checkbox"><i>自动登录</i></label></div>
                <div class="sub" @click="sub"><b id="sub">立即登录</b><span id="subspan"></span></div>
                <div id="tiaozhuan" class="tiaozhuan">{{msg}}<span id="tiaozhuanspan"></span></div>
            </div>
        </div>
    </main>
  </div>
</template>
<script>
import * as types from '../store/type';
export default {
    data(){
        return {
            usertext:"",
            passtext:"",
            checktext:true,
            msg:""
        }
    },
    methods:{
        sub(){
            this.$store.dispatch(types.CHECK_USER,{
                    username:this.usertext,
                    password:this.passtext,
                    save:this.checktext
            }).then(res=>{
                res.err ?this.msg = res.mess  : this.$router.go(-1)
            })
        }
    },
    beforeRouteEnter(to,from,next){
        let local = window.localStorage.getItem('user');
        if(!local){
            next()
        }else{
            next("/home")
        }
  }
}
</script>>
<style scoped>
.margin{width:1200px;margin:0 auto}
header{position: relative;}
header .head-b{height:100px;display:flex;justify-content:space-between;border-bottom: 5px solid #c7181d;}
header .head-b .logo{display:inline-block;}
header .head-b .seach{padding-top:20px;display:none;}
header .head-b .seach .sou{height:36px;}
header .head-b .seach .sou .txt{float:left;padding:0 5px;border:3px solid #c7181d;width:460px;height:30px;}
header .head-b .seach .sou .sub{float:left;width:73px;height:36px;border:0;background:#c7181d url(../assets/img/seach.png) no-repeat center;cursor: pointer;}
header .head-b .seach .jingzhun{margin-top:5px;}
header .head-b .seach .jingzhun a{display:inline-block;font:12px/1 "微软雅黑";color:#666; margin-left:3px;}
header .head-b .seach .jingzhun a.te{color:#c51010;}
header .head-b .car{margin-top:20px;height:34px;width:158px;border:1px solid #666;padding:0 5px;display:none;}
header .head-b .car span{display:inline-block;font:12px/34px "微软雅黑";color:#666;cursor: pointer;}
header .head-b .car i{color:#c7181d;font:16px/34px "微软雅黑";display: inline-block;text-align: center;width:58px;}
main .margin{height:495px;position: relative;}
main .margin .login-box{width: 332px;border-radius: 3px;top: 5px;box-shadow: #999 0px 0px 2px;height: 485px;right:150px;position: absolute;border: 1px solid #FFF;background:#fff url(../assets/img/weibo.png) no-repeat center bottom;}
main .margin .login-box h3{font-size: 16px;font-weight: bold;color: #333;margin: 18px 0 26px 15px;}
main .margin .login-box .user input{width: 277px;height: 18px;line-height: 18px;padding: 10px 0 10px 23px;border: 1px solid #cacaca;font-size: 14px;margin: 0 0 0 15px;background:url(../assets/img/user.png) no-repeat 5px 10px;}
main .margin .login-box .user span{display:block;padding: 3px 0 10px 23px;color:red;height:12px;}
main .margin .login-box .pass span{display:block;padding: 3px 0 10px 23px;color:red;height:12px;}
main .margin .login-box .pass input{width: 277px;height: 18px;line-height: 18px;padding: 10px 0 10px 23px;border: 1px solid #cacaca;font-size: 14px;margin: 0 0 0 15px;background:url(../assets/img/pass.png) no-repeat 5px 10px;}
main .margin .login-box .checkbox{padding: 0 0 10px 12px;}
main .margin .login-box .checkbox i{cursor: pointer;}
main .margin .login-box .checkbox input{margin-right:5px;cursor: pointer;}
main .margin .login-box .sub{padding:0 23px;margin-top:20px;}
main .margin .login-box .sub b{display:block;color: #fff;border: 1px solid #a71427;background-color: #d10208;height: 38px;line-height: 36px;text-align: center;border-radius: 3px;font-size: 16px;cursor: pointer;}
main .margin .login-box .sub span{display:block;padding: 3px 0 10px 0px;color:red;height:12px;}
main .margin .login-box .tiaozhuan{text-align: center;font:26px/1 "微软雅黑";color:#0f0;}
  </style>