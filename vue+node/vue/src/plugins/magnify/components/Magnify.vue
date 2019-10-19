<template>
    <div class="box" :style="box" v-move="{moveWidth,moveHeight,scale,smallWidth,smallHeight}"  @mousemove="enter" @mouseleave="out">
        <div id="move" :style="move"   class="move" v-show="state"></div>
        <img :src="smallUrl"  :style="small" alt="">
        <div id="bigimg" :style="big" class="bigimg" v-show="state" @mouseover.stop="over" @mousemove.stop></div>
    </div>
    
</template>

<script>
// v-move="{moveWidth,moveHeight,scale}"
// :style="move" 
export default {
    name:"Magnify",
    data(){
        return {
            state:false
        }
    },
    props:{
        smallUrl:{
            type:String
        },
        smallWidth:{
            type:Number,
            default:"400"
        },
        smallHeight:{
            type:Number,
            default:'500'
        },
        moveWidth:{
            type:Number,
            default:100
        },
        moveHeight:{
            type:Number,
            default:100
        },
        moveOpacity:{
            type:Number,
            validator:(value)=>
            {return value>=0&&value<=1},
            default:.2
        },
        moveColor:{
            type:String,
            default:'black'
        },
        bigUrl:{
            type:String
        },
        scale:{
            type:Number,
            default:4
        }

    },
    computed:{
        box(){
            let style={};
            style['width']=this.smallWidth+"px";
            style['height']=this.smallHeight+"px";
            return style;
        },
        small(){
            let style={};
            style['width']=this.smallWidth+"px";
            style['height']=this.smallHeight+"px";
            return style;
        },
        move(){
            let style={};
            style['width']=this.moveWidth+"px";
            style['height']=this.moveHeight+"px";
            style['opacity']=this.moveOpacity;
            style['background-color']=this.moveColor;

            return style;
        },
        big(){
            let style={};
            style['width']=this.moveWidth*this.scale+"px";
            style['height']=this.moveWidth*this.scale+"px";
            style['background-image']="url("+this.bigUrl+")";
            style['background-size']=this.smallWidth*this.scale+"px "+this.smallHeight*this.scale+"px";
            style['right']=-this.moveWidth*this.scale+"px";
            style['top']=(this.smallHeight-this.moveWidth*this.scale)/2+"px";

            return style;
        },
    },
    methods:{
        enter(){
            if(!this.state){
                this.state=true;
            }
            
        },
        out(){
            this.state=false;
        },
        over(){
            this.state=false;
        }
    },
    directives:{
        move(el,binding){
            bind:el.onmousemove=(event)=>{
                let {moveWidth,moveHeight,scale,smallWidth,smallHeight}=binding.value
                let omove=el.firstElementChild
                let obig=el.lastElementChild
                let moveLeft=event.pageX-getAllLeft(el)-moveWidth/2;
                let moveTop=event.pageY-getAllTop(el)-moveHeight/2;
                if(moveLeft<0){
                    moveLeft=0;
                }else if(moveLeft>smallWidth-moveWidth){
                    moveLeft=smallWidth-moveWidth;
                }
                if(moveTop<0){
                    moveTop=0;
                }else if(moveTop>smallHeight-moveHeight){
                    moveTop=smallHeight-moveHeight;
                }
                // console.log("event"+event.offsetX,event.offsetY)
                // console.log(moveLeft,moveTop)
                omove.style.left=moveLeft+"px";
                omove.style.top=moveTop+"px";
                obig.style.backgroundPosition=-moveLeft*scale+"px "+-moveTop*scale+"px";
                //就是这个元素所有offsetParent的offsetTop值的和
                function getAllTop(obj){
                    //累加器，累加器的初始值不是0，而是自己现在offsetTop值
                    //一会儿while语句直接从它爸开始了
                    var allTop = obj.offsetTop;
                    //当前正在算高度的元素
                    var currentObj = obj;
                    while(currentObj = currentObj.offsetParent){
                        allTop += currentObj.offsetTop;
                    }
                    return allTop;
                }

                function getAllLeft(obj){
                    //累加器，累加器的初始值不是0，而是自己现在offsetTop值
                    //一会儿while语句直接从它爸开始了
                    var allLeft = obj.offsetLeft;
                    //当前正在算高度的元素
                    var currentObj = obj;
                    while(currentObj = currentObj.offsetParent){
                        allLeft += currentObj.offsetLeft;
                    }
                    return allLeft;
                }
            }
        }
    }
}
</script>

<style scoped>
.box{
    position:relative;
}
.move{
    position: absolute;
    z-index: 100;
}
.bigimg{
    position:absolute;
    z-index: 100;
    background-repeat:no-repeat;
}

</style>













