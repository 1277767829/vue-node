<template>
    <div class="box" id="box">
        
    </div>
</template>

<script>
export default {
    mounted(){
        var map = new BMap.Map("box");          // 创建地图实例  
        var point = new BMap.Point(120.5318339559, 27.5886985629);  // 创建点坐标  
        map.centerAndZoom(point, 17);    
        var marker = new BMap.Marker(point);  // 创建标注
	    map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        var label = new BMap.Label("点我有惊喜！",{offset:new BMap.Size(20,-10)});
        marker.setLabel(label);
        var opts = {
        width : 100,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title : "邮乐网总部" , // 信息窗口标题
        enableMessage:true,//设置允许信息窗发送短息
        message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        }
        var infoWindow = new BMap.InfoWindow("地址：温州市龙港市皇后大道一号", opts);  // 创建信息窗口对象 
        marker.addEventListener("click", function(){          
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
        map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	    map.enableScrollWheelZoom(true);     
    }
}
</script>
<style scoped>
    html{height:100%}  
    body{height:100%;margin:0px;padding:0px} 
    .box{width:350px;height:200px;position: absolute;left:-100px;z-index: 1000;}
</style>
