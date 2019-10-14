<template>
  <div class="error">
    <h3>error:404<router-link tag="p"  to="/home">首页</router-link></h3>
    
  </div>
</template>
<style scoped>
.error{
  position: relative;
  height:500px;
  width:100%;
}
h3{ position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  font-size:30px;
  }
p{text-align: center;color: darkcyan;cursor: pointer;}
</style>

