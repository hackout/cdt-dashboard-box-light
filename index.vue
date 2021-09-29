<template>
    <div class="cdt-dashboard-box" :style="{height: typeof height == 'number' ? height+'px' : height}">
        <div class="cdt-machine-box-item" v-if="type == 'machine">
            <div class="cdt-machine-box-item-bg"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-lt"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-tl"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-rt"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-tr"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-lb"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-bl"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-rb"></div>
            <div class="cdt-machine-box-item-line cdt-machine-box-item-line-br"></div>
            <div class="cdt-machine-box-body" :style="{height:'calc('+height+' - 2px)'}">
               <slot></slot>
           </div>
       </div>
       <div class="cdt-dashboard-box-item" v-else>
          <div class="cdt-dashboard-box-item-body" :style="{height:'calc('+height+' - 2px)'}">
           <slot></slot>
       </div>
   </div>
</div>
</template>
<script>
    export default {
        name: "cdt-dashboard-box",
        props: {
            type: {
                type: String,
                default: 'light',
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
            borderColor: {
                type: String,
                default: '#005896'
            },
            borderLineColor: {
                type: String,
                default: 'rgba(35,140,205,.85)'
            },
            borderInsideColor: {
                type: String,
                default: '#112248'
            },
            bgColor: {
                type: String,
                default: '#102c5b'
            },
            bgEndColor:{
                type: String,
                default: '#091c4a'
            },
            bgDeg:{
                type: Number|String,
                default: 90
            }
        },
        created() {
            this.$nextTick(() => {
                this.$emit("started",this.$refs['cdt-dashboard-box'])
            })
        }
    }
</script>
<style>
    .cdt-dashboard-box{
        width:  100%;
        height:  100%;
        box-sizing: border-box;
        display: inline-block;
        position: relative;
    }
    .cdt-dashboard-box-item{
      width:  100%;
      height:  100%;
      box-sizing: border-box;
      border:  #005896 1px solid;
      border-radius: 10px;
      display: inline-block;
      min-height: 200px;
      background:#102c5b linear-gradient(90deg,#102c5b 25%,#091c4a);
      position: relative;
  }
  .cdt-dashboard-box-item:before{
      width:  100%;
      height:  10px;
      position: absolute;
      left:  0;
      top:  -5px;
      content: ' ';
      background: radial-gradient(#fff 25%,#102c5b 50%) center no-repeat;
      opacity: .5;
  }
  .cdt-dashboard-box-item-body{
      width:  100%;
      height:  100%;
      box-sizing: border-box;
      border:  #112248 1px solid;
      border-radius: 10px;
      display: inline-block;
  }

  .cdt-machine-box-item{
      width:  100%;
      height:  100%;
      box-sizing: border-box;
      padding:  15px;
      border-radius: 10px;
      display: inline-block;
      position: relative;
  }
  .cdt-machine-box-item-line{
      border:  #005896 2px solid;
      background: rgba(35,140,205,.85);
      position: absolute;
  }
  .cdt-machine-box-item-line-tl{
      left:  4px;
      border-right:  0;
      top: 10px;
      height:  100px;
      width:  6px;
      border-bottom-left-radius: 10px;
  }
  .cdt-machine-box-item-line-lt{
      top:  4px;
      border-bottom:  0;
      left: 10px;
      height:  6px;
      width:  100px;
      border-top-right-radius: 10px;
  }
  .cdt-machine-box-item-line-tr{
      right:  0;
      border-left:  0;
      top: 10px;
      height:  100px;
      width:  6px;
      border-bottom-right-radius: 10px; 
  }
  .cdt-machine-box-item-line-rt{
      top:  4px;
      border-bottom:  0;
      right: 6px;
      height:  6px;
      width:  100px;
      border-top-left-radius: 10px;
  }
  .cdt-machine-box-item-line-bl{
      left:  4px;
      border-right:  0;
      bottom: 6px;
      height:  100px;
      width:  6px;
      border-top-left-radius: 10px;
  }
  .cdt-machine-box-item-line-lb{
      bottom:  0;
      border-top:  0;
      left: 10px;
      height:  6px;
      width:  100px;
      border-bottom-right-radius: 10px;
  }
  .cdt-machine-box-item-line-br{
      right:  0;
      border-left:  0;
      bottom: 6px;
      height:  100px;
      width:  6px;
      border-top-right-radius: 10px;
  }
  .cdt-machine-box-item-line-rb{
      bottom:  0;
      border-top:  0;
      right: 6px;
      height:  6px;
      width:  100px;
      border-bottom-left-radius: 10px;
  }
  .cdt-machine-box-item-line-tl:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      left:  10px;
      border-right:  0;
      top: 4px;
      height:  50px;
      width:  6px;
      border-bottom-right-radius: 10px;
  }
  .cdt-machine-box-item-line-lt:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      top:  10px;
      border-right:  0;
      left: 4px;
      width:  50px;
      height:  6px;
      border-bottom-right-radius: 10px;
  }
  .cdt-machine-box-item-line-tr:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      right:  10px;
      border-right:  0;
      top: 4px;
      height:  50px;
      width:  6px;
      border-bottom-left-radius: 10px;
  }
  .cdt-machine-box-item-line-rt:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      top:  10px;
      border-right:  0;
      right: 4px;
      width:  50px;
      height:  6px;
      border-bottom-left-radius: 10px;
  }
  .cdt-machine-box-item-line-bl:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      left:  10px;
      border-right:  0;
      bottom: 4px;
      height:  50px;
      width:  6px;
      border-top-right-radius: 10px;
  }
  .cdt-machine-box-item-line-lb:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      bottom:  10px;
      border-right:  0;
      left: 4px;
      width:  50px;
      height:  6px;
      border-top-right-radius: 10px;
  }
  .cdt-machine-box-item-line-br:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      right:  10px;
      border-right:  0;
      bottom: 4px;
      height:  50px;
      width:  6px;
      border-top-left-radius: 10px;
  }
  .cdt-machine-box-item-line-rb:before{
      background: rgba(35,140,205,.85);
      position: absolute;
      content: '';
      bottom:  10px;
      border-right:  0;
      right: 4px;
      width:  50px;
      height:  6px;
      border-top-left-radius: 10px;
  }
  .cdt-machine-box-item-bg{
      border:  #005896 2px solid;
      background: radial-gradient(#102c5b 35%,#091c4a 75%);
      width:  calc(100% - 20px);
      height:  calc(100% - 20px);
      position: absolute;
      left:  10px;
      top:  10px;
      overflow: hidden;
      opacity: .7;
  }
  .cdt-machine-box-item-body{
      width: 100%;
      height: 100%;
      padding:  20px;
      color:  rgb(0,225,245);
  }
</style>