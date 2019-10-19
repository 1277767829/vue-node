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
    <div id=banner>
        <a href=""><img src="../assets/img/dazaxie.jpg" alt=""></a>
    </div>
    <main>
        <div class="moren margin">
            <a href="">默认</a>
            <a href="">价格</a>
        </div>
        <ul id="good" class="margin">
            <router-link v-for="value in $store.state.goods" :key="value.goodsid" :to="'/Detail/'+value.goodsid" tag="li">
                    <img v-lazy="server.baseUrl+value.url" alt="">
                    <p>{{value.tip}}</p>
                    <div class="bottom">
                        <i>￥</i>
                        <b>{{value.price1}}</b>
                        <span>￥{{value.price2}}</span>
                        <s>立即购买</s>
                    </div>
            </router-link>
        </ul>
    </main>
</div>
</template>
<script>
import * as types from '../store/type'
export default {
    activated(){
        this.$store.dispatch(types.UPDATE_COLUMN)
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
main{background:#ededed;padding:50px 0;}
main .moren{background:#fff;border:1px solid #666;height:43px;}
main .moren a{float:left;width:81px;font:16px/43px "微软雅黑";color:#666;text-align: center;border-right:1px solid #666;}
main ul{overflow: hidden;}
main ul li{float:left;margin:10px 5px;background:#fff;width:230px;}
main ul li p{color: #666;height: 40px;padding: 6px 10px 0;margin-bottom: 10px;}
main ul li .bottom{overflow: hidden;}
main ul li i{float: left;margin-left: 10px;font:12px/2 "微软雅黑";color:#666;}
main ul li b{color: #FF062A;font:20px/24px "微软雅黑";margin-left: 5px;float: left;}
main ul li span{float: left;margin-left: 5px;font:12px/2 "微软雅黑";color: #999;text-decoration: line-through;}
main ul li s{float: right;width: 64px;height: 20px;background-color: #e63e3e;font:12px/20px "微软雅黑";text-align: center;border-radius: 4px;margin-right: 10px;color:#fff;}
</style>
