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
    <nav>
        <div class="margin">
            <a class="biao te bg1" href=""></a>
            <a class="biao" href="">拼团</a>
            <a class="biao" href="">天天特卖</a>
            <a class="biao" href="">优惠券</a>
            <a class="biao" href="">海外馆</a>
            <a class="biao" href="">邮乐农品</a>
            <a class="biao" href="">生活缴费</a>
            <a class="biao" href="">邮乐旅行</a>
            <dl id="list">
                <dt class="dt"><i class="bg1"></i><span>手机数码</span></dt>
                <dt class="dt"><i class="bg1"></i><span>箱包、配饰</span></dt>
                <dt class="dt"><i class="bg1"></i><span>电脑办公</span></dt>
                <dt class="dt"><i class="bg1"></i><span>运动户外</span></dt>
                <dt class="dt"><i class="bg1"></i><span>特色美食</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
                <dt class="dt"><i class="bg1"></i><span>男装、女装</span></dt>
            </dl>
        </div>
    </nav>
    <div id="banner">
        <img class="l" src="../assets/img/l.png" alt="">
        <slider-breath></slider-breath>
        
        <img class="r" src="../assets/img/r.png" alt="">
    </div>
    <section>
        <div id="dijia" class="margin">
            <div class="dijia-t">
                <a class="cur title" href=""><i class="bg2 i1"></i><span>底价来袭</span></a>
                <a class="title" href=""><i class="bg2 i2"></i><span>农品特卖</span></a>
                <a class="title" href=""><i class="bg2 i3"></i><span>海外尖货</span></a>
            </div>
            <div class="dijia-b">
                <ul>
                    <li class="cur"><a href=""><img src="../assets/img/dijia.png" alt=""></a><a href=""><img src="../assets/img/dijia.png" alt=""></a><a href=""><img src="../assets/img/dijia.png" alt=""></a><a href=""><img src="../assets/img/dijia.png" alt=""></a><a href=""><img src="../assets/img/dijia.png" alt=""></a><a href=""><img src="../assets/img/dijia.png" alt=""></a></li>
                    <li><a href=""><img src="../assets/img/nongping.png" alt=""></a><a href=""><img src="../assets/img/nongping.png" alt=""></a><a href=""><img src="../assets/img/nongping.png" alt=""></a><a href=""><img src="../assets/img/nongping.png" alt=""></a><a href=""><img src="../assets/img/nongping.png" alt=""></a><a href=""><img src="../assets/img/nongping.png" alt=""></a></li>
                    <li><a href=""><img src="../assets/img/haiwai.jpg" alt=""></a><a href=""><img src="../assets/img/haiwai.jpg" alt=""></a><a href=""><img src="../assets/img/haiwai.jpg" alt=""></a><a href=""><img src="../assets/img/haiwai.jpg" alt=""></a><a href=""><img src="../assets/img/haiwai.jpg" alt=""></a><a href=""><img src="../assets/img/haiwai.jpg" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div class="middle margin">
            <a href=""><img src="../assets/img/1.jpg" alt=""></a>
            <a href=""><img src="../assets/img/2.jpg" alt=""></a>
            <a href=""><img src="../assets/img/3.jpg" alt=""></a>
        </div>
    </section>
    <main>
        <div class="margin">
            <div id="shejian">
                <div class="shejian-t">
                    <div class="shejian-t-l">
                        <i></i>
                        <h3>舌尖美食</h3>
                        <a href="">挂面</a>
                        <a href="">鸡蛋</a>
                        <a href="">桂圆干</a>
                        <a href="">红枣</a>
                        <a href="">食用油</a>
                        <a href="">大米</a>
                        <a href="">更多</a>
                    </div>
                    <div class="shejian-t-r">
                        <a href="">优质土蜂蜜</a>
                        <a href="">质量有保证</a>
                    </div>
                </div>
                <div class="shejian-b">
                    <div class="shejian-b-l"><a href=""><img src="../assets/img/shejian1.png" alt=""></a></div>
                    <ul>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/shejian2.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <div id="jiaju">
                <div class="shejian-t">
                    <div class="shejian-t-l">
                        <i></i>
                        <h3>家居必备</h3>
                        <a href="">挂面</a>
                        <a href="">鸡蛋</a>
                        <a href="">桂圆干</a>
                        <a href="">红枣</a>
                        <a href="">食用油</a>
                        <a href="">大米</a>
                        <a href="">更多</a>
                    </div>
                    <div class="shejian-t-r">
                        <a href="">优质土蜂蜜</a>
                        <a href="">质量有保证</a>
                    </div>
                </div>
                <div class="shejian-b">
                    <div class="shejian-b-l"><a href=""><img src="../assets/img/jiaju1.png" alt=""></a></div>
                    <ul>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/jiaju2.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <div id="zhineng">
                <div class="shejian-t">
                    <div class="shejian-t-l">
                        <i></i>
                        <h3>智能生活</h3>
                        <a href="">挂面</a>
                        <a href="">鸡蛋</a>
                        <a href="">桂圆干</a>
                        <a href="">红枣</a>
                        <a href="">食用油</a>
                        <a href="">大米</a>
                        <a href="">更多</a>
                    </div>
                    <div class="shejian-t-r">
                        <a href="">优质土蜂蜜</a>
                        <a href="">质量有保证</a>
                    </div>
                </div>
                <div class="shejian-b">
                    <div class="shejian-b-l"><a href=""><img src="../assets/img/zhineng1.png" alt=""></a></div>
                    <ul>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                        <li><a href=""><img src="../assets/img/zhineng2.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>
<script>
import sliderBreath from '../components/Slider';
import * as types from '../store/type';
export default {
    data(){
        return {
            banner:[]
        }
    },
    components:{
        sliderBreath
    },
    activated(){
        this.$store.dispatch(types.UPDATE_BANNER);
    }
}
</script>>
<style scoped>
header .head-m img{width:100%;}
.bg1{background-image:url(../assets/img/sprite_category.png);}
.bg2{background-image:url(../assets/img/bj2.png);}
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

nav{background:#a71b1b;border-top:1px solid #7a090b;height:39px;position: relative;}
nav .biao{float:left;display:block;width:100px;text-align: center;color:#fff;font:16px/39px "微软雅黑";height:39px;}
nav .biao:hover{background-color:#6c0709;}
nav .biao.te{width:190px;height:39px;background-position:0 -16px;}
nav .biao.te:hover{background-position:0 -76px;}
nav dl{position: absolute;top:39px;left:74px;height:470px;background:rgba(255,255,255,.9);z-index:20;width:190px;}
nav dl dt{width:190px;position: relative;line-height: 24px;height: 24px;font-size: 12px;color: #666;padding: 6px 5px 6px 15px;cursor: pointer;}
nav dl dt:hover i{transform:rotate(360deg)}
nav dl dt i{display: inline-block;width: 16px;height: 16px;background-position:-64px 0;margin-right: 10px;vertical-align: middle;transition: .8s ease;}
nav dl dt:nth-child(1) i{background-position:0 0;}
nav dl dt:nth-child(2) i{background-position:-80px 0;}
nav dl dt:nth-child(3) i{background-position:-16px 0;}
nav dl dt:nth-child(4) i{background-position:-112px 0;}
nav dl dt:nth-child(5) i{background-position:-144px 0;}
nav dl dd{display:none;position: absolute;width:1010px;height:470px;top: 0;left: 210px;box-shadow: 1px 2px 1px 0 #ccc;background-color: #fff;}
nav dl dd .title{font-size: 15px;color: #333;font-weight: bold;border-bottom: 1px solid #ebebeb;margin: 0 15px;height: 37px;}
nav dl dd .title span{display:inline-block; text-align: center;width: 120px;height: 36px;line-height: 38px;cursor: pointer;}
nav dl dd .title span.cur{border-bottom:3px solid #a71b1b;}
nav dl dd .content{height:360px;width:980px;}
nav dl dd .content .fenlei{display:block;width:850px;}
nav dl dd .content .fenlei b{float:left;width: 100px;padding: 6px 10px 6px 20px;font: 16px/2 "微软雅黑";;font-weight: bold;}
nav dl dd .content .fenlei ul{float:left;padding-top: 6px;border-bottom: 1px solid #ebebeb;width:700px;height:38px;}
nav dl dd .content .fenlei li{float:left;font:12px/28px "微软雅黑";padding: 0 10px;} 
nav dl dd .content .pinpai{display:none;}
nav dl dd .content .pinpai li{float:left;}
nav dl dd .content .pinpai img{padding: 7px 14px 0 14px;}

#banner{position: relative;left:0;right:0;}
#banner .l{position:absolute;left:0;top:0;}
#banner .r{position: absolute;right:0;top:0;z-index:9}

section{background:#ebebeb;padding-top:20px;position: relative;}
section #dijia{background:#fff;}
section #dijia .dijia-t{border-bottom:1px solid #ccc;width:1200px;height:52px;}
section #dijia .dijia-t .title{display:inline-block;height:52px;width:210px;text-align: center;font:14px/52px "微软雅黑";}
section #dijia .dijia-t .title i{display:inline-block; width:25px;height:25px;margin-right:10px;vertical-align:middle;}
section #dijia .dijia-t .title i.i1{background-position:-25px 0;}
section #dijia .dijia-t .title i.i2{background-position:-50px 0;}
section #dijia .dijia-t .title i.i3{background-position:-105px 0;}
section #dijia .dijia-t .title.cur{border-bottom: solid 1px #c5181c;background: #fdf3f2;color: #d63334;}
section #dijia .dijia-t .title:hover i.i2{background-position:-76px 0;}
section #dijia .dijia-t .title:hover i.i3{background-position:-132px 0;}
section #dijia .dijia-b ul{position: relative;width:1200px;height:200px;overflow: hidden;}
section #dijia .dijia-b ul li{position: absolute;left:0;top:200px;}
section #dijia .dijia-b ul li.cur{top:0;}
section .middle{margin-top:50px;display:flex;justify-content: space-between;}

main{background:#ebebeb;padding-top:50px;position: relative;} 

main #shejian .shejian-t{height:42px;} 
main #shejian .shejian-t .shejian-t-l{float:left;}
main #shejian .shejian-t .shejian-t-l i{float:left;width: 5px;margin-top: 3px;height: 25px;background: #ff7b30;}
main #shejian .shejian-t .shejian-t-l h3{float:left;color: #ff7b30;margin-left: 15px;margin-right: 10px;font-size: 22px;font-weight: bolder;}
main #shejian .shejian-t .shejian-t-l a{float:left;margin-left: 10px;color: #666;font: 14px/25px "微软雅黑";}
main #shejian .shejian-t .shejian-t-r{float:right;}
main #shejian .shejian-t .shejian-t-r a{float:right;margin-top: 6px;line-height: 16px;font-size: 14px;color: #333;}
main #shejian .shejian-b{overflow: hidden;} 
main #shejian .shejian-b .shejian-b-l{float:left;}
main #shejian .shejian-b ul{margin:5px}
main #shejian .shejian-b ul li{float:right;margin:15px;}
main #jiaju{margin-top:50px;}
main #jiaju .shejian-t{height:42px;} 
main #jiaju .shejian-t .shejian-t-l{float:left;}
main #jiaju .shejian-t .shejian-t-l i{float:left;width: 5px;margin-top: 3px;height: 25px;background: #1bb145;}
main #jiaju .shejian-t .shejian-t-l h3{float:left;color: #1bb145;margin-left: 15px;margin-right: 10px;font-size: 22px;font-weight: bolder;}
main #jiaju .shejian-t .shejian-t-l a{float:left;margin-left: 10px;color: #666;font: 14px/25px "微软雅黑";}
main #jiaju .shejian-t .shejian-t-r{float:right;}
main #jiaju .shejian-t .shejian-t-r a{float:right;margin-top: 6px;line-height: 16px;font-size: 14px;color: #333;}
main #jiaju .shejian-b{overflow: hidden;} 
main #jiaju .shejian-b .shejian-b-l{float:left;}
main #jiaju .shejian-b ul{margin:5px}
main #jiaju .shejian-b ul li{float:right;margin:15px;}
main #zhineng{margin-top:50px;}
main #zhineng .shejian-t{height:42px;} 
main #zhineng .shejian-t .shejian-t-l{float:left;}
main #zhineng .shejian-t .shejian-t-l i{float:left;width: 5px;margin-top: 3px;height: 25px;background: #2289ff;}
main #zhineng .shejian-t .shejian-t-l h3{float:left;color: #2289ff;margin-left: 15px;margin-right: 10px;font-size: 22px;font-weight: bolder;}
main #zhineng .shejian-t .shejian-t-l a{float:left;margin-left: 10px;color: #666;font: 14px/25px "微软雅黑";}
main #zhineng .shejian-t .shejian-t-r{float:right;}
main #zhineng .shejian-t .shejian-t-r a{float:right;margin-top: 6px;line-height: 16px;font-size: 14px;color: #333;}
main #zhineng .shejian-b{overflow: hidden;} 
main #zhineng .shejian-b .shejian-b-l{float:left;}
main #zhineng .shejian-b ul{margin:5px}
main #zhineng .shejian-b ul li{float:right;margin:15px;}
</style>

