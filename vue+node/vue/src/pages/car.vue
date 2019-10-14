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
            <table>
                <thead>
                    <tr>
                        <th class="lie1"><label class="shou" for="quanxuan">全选</label><input @click="allchecked(!all)" v-model="all"  type="checkbox" id="quanxuan"></th>
                        <th class="lie2">商品照片</th>
                        <th class="lie3">商品信息</th>
                        <th class="lie4">单价</th>
                        <th class="lie5">商品数量</th>
                        <th class="lie6">价格合计</th>
                        <th class="lie7">操作</th>
                    </tr>
                </thead>
                <tbody v-if="!$store.state.user.err">
                    <tr v-for="item in $store.state.user.data.goods" :key="item._id">
                        <td class="lie1"><input @click="checked(item._id,!item.checked)" v-model="item.checked" class="checkbox" type="checkbox" id="checkbox"></td>
                        <td class="lie2"><img :src="server.baseUrl+item.url[0]" alt=""></td>
                        <td class="lie3"><router-link :to="'/Detail/'+item.goodsid">{{item.tip}}</router-link></td>
                        <td class="lie4"><b>￥{{item.price1}}</b></td>
                        <td class="lie5"><button @click="minus(item._id)">-</button><input v-model="item.num"><button @click="add(item._id)">+</button></td>
                        <td class="lie6"><b>￥{{item.price1*item.num}}</b></td>
                        <td class="lie7" @click="remove(item.num,item._id)"><i>删除</i> </td>
                    </tr>
                </tbody>
                <tfoot>
                       <tr>
                            <td class="lie1">总计：</td>
                            <td class="lie2"></td>
                            <td class="lie3"><s>商品总数量</s></td>
                            <td class="lie4"><i>{{countnum}}</i></td>
                            <td class="lie5">总价格</td>
                            <td class="lie6">￥<b>{{countprice}}</b></td>
                            <td class="lie7"><a href="javescript:;">结算</a> </td>
                       </tr>
                </tfoot>
            </table>
        </div>
    </main>
 </div>
</template>
<script>
import * as types from '../store/type'
export default {
    computed: {
        all:{
            get(){
                if(!this.$store.state.user.err){
                    
                    let every=this.$store.state.user.data.goods.every((item,index) => {
                        return item.checked;
                    });
                    return every;
                }
            },
            set(){}
        },
        // all(){
        //         let every=this.$store.state.user.data.goods.every((item,index) => {
        //             return item.checked;
        //         });
        //         return every;
        // },
        countnum(){
            let start=0;
            if(!this.$store.state.user.err){
                this.$store.state.user.data.goods.forEach((item,index) => {
                    if(item.checked){
                        start+=item.num*1;
                    }
                });
            }
            return start;
        },
        countprice(){
            let price=0;
             if(!this.$store.state.user.err){
                this.$store.state.user.data.goods.forEach((item,index) => {
                    if(item.checked){
                        price+=item.price1*item.num;
                    }
                });
            }
            return price;
        }
  },
    methods:{
        allchecked(checked){
            this.$store.dispatch(types.UPDATE_CARALLCHECKED,checked)
        },
        checked(id,checked){
            this.$store.dispatch(types.UPDATE_CARCHECKED,{id,checked})
        },
        minus(id){
            this.$store.dispatch(types.UPDATE_CARCHANGE,{num:-1,id})
        },
        add(id){
            this.$store.dispatch(types.UPDATE_CARCHANGE,{num:1,id})
        },
        remove(num,id){
            this.$store.dispatch(types.UPDATE_CARREMOVE,{num,id})
        }
    },
    beforeRouteEnter(to,from,next){
        let local = window.localStorage.getItem('user');
        local ? next() : next('/login');
  }
}
</script>>
<style scoped>
.margin{width:1200px;margin:0 auto}
.shou{cursor: pointer;}
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
main table{width:950px;margin:20px 125px;}
main table thead{display:block;width:950px;background:#f3f3f3;height:36px;padding:0 10px;}
main table thead th{display:inline-block;text-align: center;font:12px/3 "微软雅黑";color:#666;height:36px;}
main table thead th input{vertical-align :middle;cursor: pointer;}
main table tbody tr{margin-top:20px;background:#f3f3f3;display:block;width:950px;height:150px;padding:0 10px;}
main table tbody td{display:inline-block;font:12px/150px "微软雅黑";color:#666;height:150px;}
main table tbody td a{display:inline-block;width:200px;font:12px/24px "微软雅黑";}
main table tbody td a:hover{color:red;}
main table tbody td img{width:180px;height:100px;}
main table tbody td input{width:50px;border:1px solid #888;margin:0 5px;}
main table tbody td button{width:15px;border:1px solid #888;padding:0;text-align: center;}
main table tbody td .checkbox{width:20px;height:20px;}
main table tbody td i{display:inline-block;width:48px;height:25px;background:#f9f;color:#fff;font:12px/25px "微软雅黑";text-align: center;cursor: pointer;border-radius:5px; }
main table tbody td b{display:inline-block;font:16px/36px "微软雅黑";}
main table tfoot{display:block;width:950px;background:#f3f3f3;height:60px;padding:0 10px;margin-top:20px;}
main table tfoot td{display:inline-block;font:16px/60px "微软雅黑";color:#666;height:60px;}
main table tfoot td s{display:inline-block;text-align: right;width:240px;}
main table tfoot td b,i{display:inline-block;font:20px/3 "微软雅黑";color:#c7181d;}
main table tfoot td a{display:inline-block;height:30px;width:60px;background:#cc4545;color:#fff;font:20px/30px "微软雅黑";text-align: center;border-radius:8px;}
.lie1{width:64px;}
.lie2{width:200px;}
.lie3{width:260px;}
.lie4{width:100px;}
.lie5{width:100px;}
.lie6{width:100px;}
.lie7{width:60px;}

</style>
