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
        <div class="register">
            <div class="title">
                <p>新用户注册</p>
            </div>
            <div class="content">
                <table>
                    <tr>
                        <td><s>手机号码</s></td>
                        <td><input id="user" type="text" placeholder="请输入您的手机号" v-model="usertext" @blur="user"></td>
                        <td><span  id="userspan" :class="{te:a}">{{userspan}}</span></td>
                    </tr>
                    <tr>
                        <td><s>验证码</s></td>
                        <td><div class="count"><input id="verify" type="text" placeholder="请输入计算结果" v-model="codetext" @blur="code"><div v-show="!a" id="cover" class="cover"></div></div><div id="random" class="random" @click="random"><b >{{num1}}</b><i>{{fuhao}}</i><b>{{num2}}</b></div></td>
                        <td><span id="verifyspan" :class="{te:b}">{{codespan}}</span></td>
                    </tr>
                    <tr>
                        <td><s>设置密码</s></td>
                        <td><input id="pass1" type="password" placeholder="请设置6-20位字符的密码" v-model="pass1text" @blur="pass1"></td>
                        <td><span id="pass1span" :class="{te:c}">{{pass1span}}</span></td>
                    </tr>
                    <tr>
                        <td><s>确认密码</s></td>
                        <td><input id="pass2" type="password" placeholder="请再次输入密码" v-model="pass2text" @blur="pass2"></td>
                        <td><span id="pass2span" :class="{te:d}">{{pass2span}}</span></td>
                    </tr>
                    <tr>
                        <td><s>请上传头像</s></td>
                        <td><input type="file" name=""  enctype="multipart/form-data" id="file"></td>
                        <td><span class="te">可选</span></td>
                    </tr>
                </table>
                <div class="xieyi">
                    <label><input id="checkbox" type="checkbox" value=1 v-model="e"></label><i>我接受 </i><a href="">《邮乐用户协议》</a><a href="">《隐私权政策》</a><i> 及其相关的条款和条件</i><span id="checkboxspan">{{checkboxspan}}</span>
                </div>
                <div class="sub">
                    <a @click="sub" href="javescript:;" id="sub">立即注册</a><span id="subspan">{{subspan}}</span>
                </div>
                
            </div>
        </div>
    </main>
  </div>
</template>
<script>
export default {
    data(){
        return {
            usertext:"",
            userspan:"",
            a:0,
            codetext:"",
            codespan:"",
            num1:0,
            num2:0,
            fuhao:"",
            b:0,
            pass1text:"",
            pass1span:"",
            c:0,
            pass2text:"",
            pass2span:"",
            d:0,
            e:0,
            checkboxspan:"",
            subspan:""
        }
    },
    methods:{
        user(){
            let reguser=/^1[0-9]{10}$/;
            this.a=reguser.test(this.usertext) ? 1 : 0;
            this.userspan=reguser.test(this.usertext) ? "格式正确" : "请输入正确的手机格式";
            this.subspan="";
        },
        code(){
            let jieguo=0;
             switch (this.fuhao) {
                case "+":
                    jieguo=this.num1+this.num2;
                    break;
                case "-":
                    jieguo=this.num1-this.num2;
                    break;
                case "*":
                    jieguo=this.num1*this.num2;
                default:
                    break;
            }
           this.b=this.codetext==jieguo ? 1 : 0;
           this.codespan=this.codetext==jieguo ? "计算正确" : "计算有误请重新计算"
        },
        random(){
            this.num1=parseInt(Math.random()*10);
            this.num2=parseInt(Math.random()*10);
            let fuhaoarr=["+","-","*"];
            this.fuhao=fuhaoarr[parseInt(Math.random()*3)]
        },
        pass1(){
            let regpass=/^[a-zA-Z_0-9]{6,20}$/;
            this.c=regpass.test(this.pass1text) ? 1 : 0;
            this.pass1span=regpass.test(this.pass1text) ? "密码输入正确" : "密码格式有误请按要求输入"
        },
        pass2(){
            if(this.c){
                this.d=this.pass1text==this.pass2text ? 1 : 0;
                this.pass2span=this.pass1text==this.pass2text ? "输入正确" : "前后两次输入不一致请重新输入";
            }else{
                this.pass2span="请先输入正确的密码"
            }
        },
        sub(){
            if(!this.e){
                this.checkboxspan="请先阅读协议，并同意";
            }
            if(this.a*this.b*this.c*this.d*this.e){
                let formData = new FormData();
                formData.append('username',this.usertext);
                formData.append('password',this.pass1text);
                let file = document.getElementById('file');
                formData.append('icon',file.files[0]);
                axios({
                    url:"/api/reg",
                    method:"post",
                    data:formData
                }).then(res=>{
                    if(res.data.err==0){
                        // console.log(res)
                        this.usertext="";
                        this.userspan="";
                        this.a=0;
                        this.codetext="";
                        this.codespan="";
                        this.num1=0;
                        this.num2=0;
                        this.fuhao="";
                        this.b=0;
                        this.pass1text="";
                        this.pass1span="";
                        this.c=0;
                        this.pass2text="";
                        this.pass2span="";
                        this.d=0;
                        this.e=0;
                        this.checkboxspan="";
                        this.subspan="注册成功";
                        file.value="";
                        this.random();
                    }
                    if(res.data.err==1){
                        this.a=0;
                        this.userspan="手机号已注册";
                    }
                    if(res.data.err==2){
                        this.subspan="注册失败，请重新注册"
                    }
                })
            }else{
                this.subspan="请先按照要求填写"
            }
        }
    },
    created(){
        this.random();
    },
    beforeRouteEnter(to,from,next){
        let local = window.localStorage.getItem('user');
        local ? next('/home') : next();
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
main{background: #f7f7f7;padding: 20px 0;}
main .register{width: 920px;background: #fff;padding: 30px 15px 20px 15px;margin: 0 auto;}
main .register .title{border-bottom: 1px solid #f0f0f0;}
main .register .title p{width: 138px;height: 46px;line-height: 46px;font-size: 16px;color: #333;border: 1px solid #f0f0f0;
border-bottom: 0px;margin-left: 30px;text-align: center;cursor: pointer;}
main .register .content{padding-left:280px;padding-top:25px;}
main .register .content table{border-collapse: separate;border-spacing: 5px 20px;}
main .register .content table tr{padding-top: 40px;height: 40px;}
main .register .content table tr s{font:16px/40px "微软雅黑";color:#999;margin-right:10px;}
main .register .content table tr input{width: 258px;height: 38px;line-height: 38px;padding: 0 10px;border: 1px solid #cacaca;color: #333;font-size: 14px;}
#file{border:0}
main .register .content table tr .count{width:154px;height:40px;position: relative;float: left;}
main .register .content table tr .count .cover{width:154px;height:40px;background:rgba(0,0,0,.3);left:0;top:0;position: absolute;}
main .register .content table tr .count input{width:132px;height:38px;border: 1px solid #cacaca;}
main .register .content table tr .random{float:left;background:skyblue;width:105px;height:40px;color:#fff;font:16px/40px "微软雅黑";text-align: center;margin-left:20px;cursor: pointer;}
main .register .content table tr .random i{margin:0 10px;}
main .register .content table tr span{ margin-left: 10px;font-size: 14px;color: #c52e15;}
main .register .content table tr span.te{color: #4ef78f;}
main .register .content .xieyi{height: 40px;}
main .register .content .xieyi label{display:inline-block; width: 87px;height: 40px;text-align: right;}
main .register .content .xieyi label input{border:1px solid #000;width:14px;height:14px;background:#fff;}
main .register .content .xieyi i{color: #AEAEAE;font: 14px/40px "微软雅黑";}
main .register .content .xieyi a{color: #03c;font: 14px/40px "微软雅黑";}
main .register .content .xieyi span{margin-left: 10px;font-size: 14px;color: #c52e15;}
main .register .content .sub a{display:inline-block;margin:20px 0 0 10px;height: 40px;width: 350px;background:rgb(0, 122, 204,.8);font:18px/40px "微软雅黑";text-align:center;color:#fff;}
main .register .content .sub span{ margin-left: 10px;font-size: 14px;color:#0f0;}

</style>